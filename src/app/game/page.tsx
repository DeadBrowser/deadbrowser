'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Trophy, Heart, Pause, Play } from 'lucide-react';

interface FallingMoney {
    id: number;
    x: number;
    y: number;
    value: number;
    speed: number;
    emoji: string;
}

export default function MrBeastGame() {
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'paused' | 'gameover'>('menu');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [playerX, setPlayerX] = useState(50);
    const [fallingMoney, setFallingMoney] = useState<FallingMoney[]>([]);
    const [level, setLevel] = useState(1);
    const gameRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const lastSpawnRef = useRef(0);
    const touchStartRef = useRef<number | null>(null);

    // Load high score from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('mrbeast-highscore');
        if (saved) setHighScore(parseInt(saved));
    }, []);

    // Save high score
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('mrbeast-highscore', score.toString());
        }
    }, [score, highScore]);

    // Level up every 500 points
    useEffect(() => {
        const newLevel = Math.floor(score / 500) + 1;
        if (newLevel !== level) setLevel(newLevel);
    }, [score, level]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameState !== 'playing') return;

            if (e.key === 'ArrowLeft' || e.key === 'a') {
                setPlayerX(prev => Math.max(5, prev - 8));
            } else if (e.key === 'ArrowRight' || e.key === 'd') {
                setPlayerX(prev => Math.min(95, prev + 8));
            } else if (e.key === 'Escape' || e.key === 'p') {
                setGameState('paused');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameState]);

    // Touch/mouse controls for mobile
    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        if (gameState !== 'playing') return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        touchStartRef.current = clientX;
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (gameState !== 'playing' || !gameRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const rect = gameRef.current.getBoundingClientRect();
        const relativeX = ((clientX - rect.left) / rect.width) * 100;
        setPlayerX(Math.max(5, Math.min(95, relativeX)));
    };

    // Spawn money
    const spawnMoney = useCallback(() => {
        const moneyTypes = [
            { emoji: '💵', value: 10 },
            { emoji: '💰', value: 25 },
            { emoji: '💎', value: 50 },
            { emoji: '🏆', value: 100 },
        ];

        const type = moneyTypes[Math.floor(Math.random() * moneyTypes.length)];
        const baseSpeed = 1.5 + (level * 0.3);

        const newMoney: FallingMoney = {
            id: Date.now() + Math.random(),
            x: 5 + Math.random() * 90,
            y: -5,
            value: type.value,
            speed: baseSpeed + Math.random() * 1.5,
            emoji: type.emoji,
        };

        setFallingMoney(prev => [...prev, newMoney]);
    }, [level]);

    // Game loop
    useEffect(() => {
        if (gameState !== 'playing') return;

        const gameLoop = (timestamp: number) => {
            // Spawn new money
            const spawnInterval = Math.max(400, 1000 - (level * 100));
            if (timestamp - lastSpawnRef.current > spawnInterval) {
                spawnMoney();
                lastSpawnRef.current = timestamp;
            }

            // Update positions and check collisions
            setFallingMoney(prev => {
                const playerLeft = playerX - 8;
                const playerRight = playerX + 8;
                const playerTop = 85;

                const remaining: FallingMoney[] = [];
                let scoreGain = 0;
                let livesLost = 0;

                prev.forEach(money => {
                    const newY = money.y + money.speed;

                    // Check catch
                    if (newY >= playerTop && newY <= 95) {
                        if (money.x >= playerLeft && money.x <= playerRight) {
                            scoreGain += money.value;
                            return; // Caught!
                        }
                    }

                    // Check if fell past
                    if (newY > 100) {
                        livesLost += 1;
                        return; // Missed!
                    }

                    remaining.push({ ...money, y: newY });
                });

                if (scoreGain > 0) setScore(s => s + scoreGain);
                if (livesLost > 0) {
                    setLives(l => {
                        const newLives = l - livesLost;
                        if (newLives <= 0) {
                            setGameState('gameover');
                        }
                        return Math.max(0, newLives);
                    });
                }

                return remaining;
            });

            animationRef.current = requestAnimationFrame(gameLoop);
        };

        animationRef.current = requestAnimationFrame(gameLoop);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [gameState, playerX, spawnMoney, level]);

    const startGame = () => {
        setScore(0);
        setLives(3);
        setLevel(1);
        setPlayerX(50);
        setFallingMoney([]);
        setGameState('playing');
    };

    const resumeGame = () => setGameState('playing');

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <Link href="/" style={styles.backLink}>
                    <ArrowLeft size={18} />
                    Back
                </Link>
                <div style={styles.stats}>
                    <div style={styles.statItem}>
                        <Trophy size={16} color="#ffcc00" />
                        <span>{score.toLocaleString()}</span>
                    </div>
                    <div style={styles.statItem}>
                        {[...Array(3)].map((_, i) => (
                            <Heart
                                key={i}
                                size={16}
                                fill={i < lives ? '#ff3b30' : 'transparent'}
                                color="#ff3b30"
                            />
                        ))}
                    </div>
                </div>
                {gameState === 'playing' && (
                    <button onClick={() => setGameState('paused')} style={styles.pauseBtn}>
                        <Pause size={20} />
                    </button>
                )}
            </header>

            {/* Game Area */}
            <div
                ref={gameRef}
                style={styles.gameArea}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onMouseDown={handleTouchStart}
                onMouseMove={(e) => e.buttons === 1 && handleTouchMove(e)}
            >
                {/* Level indicator */}
                {gameState === 'playing' && (
                    <div style={styles.levelBadge}>Level {level}</div>
                )}

                {/* Falling money */}
                {fallingMoney.map(money => (
                    <div
                        key={money.id}
                        style={{
                            ...styles.money,
                            left: `${money.x}%`,
                            top: `${money.y}%`,
                            fontSize: money.value >= 50 ? '32px' : '28px',
                        }}
                    >
                        {money.emoji}
                    </div>
                ))}

                {/* Player (MrBeast with LV bag) */}
                {gameState === 'playing' && (
                    <div style={{ ...styles.player, left: `${playerX}%` }}>
                        <div style={styles.playerEmoji}>🧔</div>
                        <div style={styles.bagEmoji}>👜</div>
                    </div>
                )}

                {/* Menu Screen */}
                {gameState === 'menu' && (
                    <div style={styles.overlay}>
                        <div style={styles.menuCard}>
                            <div style={styles.menuTitle}>💰 MrBeast Money Catcher 💰</div>
                            <p style={styles.menuText}>
                                Catch falling money with your Louis Vuitton bag!
                            </p>
                            <p style={styles.highScoreText}>
                                🏆 High Score: {highScore.toLocaleString()}
                            </p>
                            <button onClick={startGame} style={styles.playBtn}>
                                <Play size={20} />
                                Play Game
                            </button>
                            <p style={styles.controls}>
                                ← → or swipe to move
                            </p>
                        </div>
                    </div>
                )}

                {/* Pause Screen */}
                {gameState === 'paused' && (
                    <div style={styles.overlay}>
                        <div style={styles.menuCard}>
                            <div style={styles.menuTitle}>⏸️ Paused</div>
                            <p style={styles.menuText}>Score: {score.toLocaleString()}</p>
                            <button onClick={resumeGame} style={styles.playBtn}>
                                <Play size={20} />
                                Resume
                            </button>
                        </div>
                    </div>
                )}

                {/* Game Over Screen */}
                {gameState === 'gameover' && (
                    <div style={styles.overlay}>
                        <div style={styles.menuCard}>
                            <div style={styles.menuTitle}>💔 Game Over!</div>
                            <p style={styles.finalScore}>
                                ${score.toLocaleString()}
                            </p>
                            {score >= highScore && score > 0 && (
                                <p style={styles.newRecord}>🎉 New High Score! 🎉</p>
                            )}
                            <button onClick={startGame} style={styles.playBtn}>
                                <Play size={20} />
                                Play Again
                            </button>
                            <Link href="/" style={styles.homeLink}>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a3e 50%, #0a0a14 100%)',
        color: 'white',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        touchAction: 'none',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontSize: '14px',
    },
    stats: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    statItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '16px',
        fontWeight: 600,
    },
    pauseBtn: {
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'none',
        borderRadius: '8px',
        padding: '8px',
        color: 'white',
        cursor: 'pointer',
    },
    gameArea: {
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
    },
    levelBadge: {
        position: 'absolute',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(135deg, #ffcc00, #ff9500)',
        color: '#000',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 700,
    },
    money: {
        position: 'absolute',
        transform: 'translateX(-50%)',
        fontSize: '28px',
        transition: 'top 0.05s linear',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
    },
    player: {
        position: 'absolute',
        bottom: '3%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'left 0.1s ease-out',
    },
    playerEmoji: {
        fontSize: '48px',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
    },
    bagEmoji: {
        fontSize: '36px',
        marginTop: '-10px',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    menuCard: {
        background: 'rgba(30, 30, 50, 0.95)',
        borderRadius: '24px',
        padding: '40px 32px',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '360px',
        width: '100%',
    },
    menuTitle: {
        fontSize: '28px',
        fontWeight: 700,
        marginBottom: '16px',
        background: 'linear-gradient(135deg, #ffcc00, #ff9500)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    menuText: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '12px',
        lineHeight: 1.5,
    },
    highScoreText: {
        fontSize: '18px',
        color: '#ffcc00',
        fontWeight: 600,
        marginBottom: '24px',
    },
    playBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: '100%',
        padding: '16px 32px',
        fontSize: '18px',
        fontWeight: 700,
        color: '#000',
        background: 'linear-gradient(135deg, #ffcc00, #ff9500)',
        border: 'none',
        borderRadius: '16px',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(255, 204, 0, 0.3)',
    },
    controls: {
        fontSize: '13px',
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: '16px',
    },
    finalScore: {
        fontSize: '42px',
        fontWeight: 700,
        color: '#34c759',
        marginBottom: '8px',
    },
    newRecord: {
        fontSize: '16px',
        color: '#ffcc00',
        marginBottom: '24px',
    },
    homeLink: {
        display: 'block',
        marginTop: '16px',
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        fontSize: '14px',
    },
};
