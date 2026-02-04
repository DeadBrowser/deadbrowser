'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trophy, Heart, Pause, Play } from 'lucide-react';

interface FallingItem {
    id: number;
    x: number;
    y: number;
    value: number;
    speed: number;
    type: 'money' | 'gold';
    rotation: number;
}

export default function MrBeastGame() {
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'paused' | 'gameover'>('menu');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [playerX, setPlayerX] = useState(50);
    const [fallingItems, setFallingItems] = useState<FallingItem[]>([]);
    const [level, setLevel] = useState(1);
    const [combo, setCombo] = useState(0);
    const gameRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
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

    // Level up every 1000 points (slower progression)
    useEffect(() => {
        const newLevel = Math.floor(score / 1000) + 1;
        if (newLevel !== level && newLevel <= 10) setLevel(newLevel);
    }, [score, level]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (gameState !== 'playing') return;

            if (e.key === 'ArrowLeft' || e.key === 'a') {
                setPlayerX(prev => Math.max(10, prev - 5));
            } else if (e.key === 'ArrowRight' || e.key === 'd') {
                setPlayerX(prev => Math.min(90, prev + 5));
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
        setPlayerX(Math.max(10, Math.min(90, relativeX)));
    };

    // Spawn items - MUCH SLOWER
    const spawnItem = useCallback(() => {
        // 70% money, 30% gold
        const isGold = Math.random() < 0.3;

        // Base speed is very slow - 0.3 to 0.6
        const baseSpeed = 0.3 + (level * 0.05);

        const newItem: FallingItem = {
            id: Date.now() + Math.random(),
            x: 10 + Math.random() * 80,
            y: -8,
            value: isGold ? 100 : 25,
            speed: baseSpeed + Math.random() * 0.3,
            type: isGold ? 'gold' : 'money',
            rotation: Math.random() * 360,
        };

        setFallingItems(prev => [...prev, newItem]);
    }, [level]);

    // Game loop
    useEffect(() => {
        if (gameState !== 'playing') return;

        const gameLoop = (timestamp: number) => {
            // Spawn new items - slower spawn rate
            const spawnInterval = Math.max(1200, 2500 - (level * 150));
            if (timestamp - lastSpawnRef.current > spawnInterval) {
                spawnItem();
                lastSpawnRef.current = timestamp;
            }

            // Update positions and check collisions
            setFallingItems(prev => {
                // Wider catch zone for easier gameplay
                const playerLeft = playerX - 12;
                const playerRight = playerX + 12;
                const playerTop = 78;

                const remaining: FallingItem[] = [];
                let scoreGain = 0;
                let livesLost = 0;
                let caught = false;

                prev.forEach(item => {
                    const newY = item.y + item.speed;

                    // Check catch - bigger hitbox
                    if (newY >= playerTop && newY <= 92) {
                        if (item.x >= playerLeft && item.x <= playerRight) {
                            scoreGain += item.value * (1 + combo * 0.1);
                            caught = true;
                            return; // Caught!
                        }
                    }

                    // Check if fell past
                    if (newY > 105) {
                        livesLost += 1;
                        return; // Missed!
                    }

                    remaining.push({
                        ...item,
                        y: newY,
                        rotation: item.rotation + item.speed * 2
                    });
                });

                if (scoreGain > 0) {
                    setScore(s => s + Math.round(scoreGain));
                    setCombo(c => c + 1);
                }
                if (caught === false && combo > 0) {
                    // Don't reset combo immediately, only on miss
                }
                if (livesLost > 0) {
                    setCombo(0);
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
    }, [gameState, playerX, spawnItem, level, combo]);

    const startGame = () => {
        setScore(0);
        setLives(3);
        setLevel(1);
        setCombo(0);
        setPlayerX(50);
        setFallingItems([]);
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
                        <span style={{ color: '#ffcc00', fontWeight: 700 }}>${score.toLocaleString()}</span>
                    </div>
                    <div style={styles.statItem}>
                        {[...Array(3)].map((_, i) => (
                            <Heart
                                key={i}
                                size={18}
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
                {/* Level & Combo indicator */}
                {gameState === 'playing' && (
                    <div style={styles.topInfo}>
                        <div style={styles.levelBadge}>Level {level}</div>
                        {combo > 1 && (
                            <div style={styles.comboBadge}>🔥 x{combo} Combo!</div>
                        )}
                    </div>
                )}

                {/* Falling items with real sprites */}
                {fallingItems.map(item => (
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            left: `${item.x}%`,
                            top: `${item.y}%`,
                            transform: `translateX(-50%) rotate(${item.rotation}deg)`,
                            width: item.type === 'gold' ? '50px' : '45px',
                            height: item.type === 'gold' ? '50px' : '45px',
                            transition: 'top 0.05s linear',
                        }}
                    >
                        <Image
                            src={item.type === 'gold' ? '/game/gold.png' : '/game/money.png'}
                            alt={item.type}
                            width={item.type === 'gold' ? 50 : 45}
                            height={item.type === 'gold' ? 50 : 45}
                            style={{
                                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                ))}

                {/* Player (MrBeast with LV bag) - Real sprites */}
                {gameState === 'playing' && (
                    <div style={{
                        ...styles.player,
                        left: `${playerX}%`,
                        transform: 'translateX(-50%)',
                    }}>
                        <div style={styles.playerSprite}>
                            <Image
                                src="/game/mrbeast.png"
                                alt="MrBeast"
                                width={100}
                                height={100}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                        <div style={styles.bagSprite}>
                            <Image
                                src="/game/lv-bag.png"
                                alt="LV Bag"
                                width={60}
                                height={60}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* Menu Screen */}
                {gameState === 'menu' && (
                    <div style={styles.overlay}>
                        <div style={styles.menuCard}>
                            <div style={styles.menuLogo}>
                                <Image
                                    src="/game/mrbeast.png"
                                    alt="MrBeast"
                                    width={80}
                                    height={80}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div style={styles.menuTitle}>MrBeast Money Catcher</div>
                            <p style={styles.menuText}>
                                Catch falling money & gold with your Louis Vuitton bag!
                            </p>
                            <div style={styles.itemsPreview}>
                                <Image src="/game/money.png" alt="Money" width={40} height={40} />
                                <span>= $25</span>
                                <Image src="/game/gold.png" alt="Gold" width={40} height={40} />
                                <span>= $100</span>
                            </div>
                            <p style={styles.highScoreText}>
                                🏆 Best: ${highScore.toLocaleString()}
                            </p>
                            <button onClick={startGame} style={styles.playBtn}>
                                <Play size={20} />
                                Play Game
                            </button>
                            <p style={styles.controls}>
                                ← → / A D / Swipe to move
                            </p>
                        </div>
                    </div>
                )}

                {/* Pause Screen */}
                {gameState === 'paused' && (
                    <div style={styles.overlay}>
                        <div style={styles.menuCard}>
                            <div style={styles.menuTitle}>⏸️ Paused</div>
                            <p style={styles.menuText}>Current Score: ${score.toLocaleString()}</p>
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
        height: '100vh',
        background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 50%, #0f0f1a 100%)',
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
        background: 'rgba(0, 0, 0, 0.6)',
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
        gap: '20px',
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
        background: 'radial-gradient(ellipse at center bottom, rgba(100,50,200,0.2) 0%, transparent 50%)',
    },
    topInfo: {
        position: 'absolute',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
    },
    levelBadge: {
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 700,
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    },
    comboBadge: {
        background: 'linear-gradient(135deg, #ff9500, #ff5e00)',
        color: '#fff',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 700,
        animation: 'pulse 0.5s ease infinite',
    },
    player: {
        position: 'absolute',
        bottom: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'left 0.08s ease-out',
    },
    playerSprite: {
        width: '100px',
        height: '100px',
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
    },
    bagSprite: {
        width: '60px',
        height: '60px',
        marginTop: '-25px',
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    menuCard: {
        background: 'linear-gradient(180deg, rgba(40, 30, 60, 0.95), rgba(20, 15, 35, 0.98))',
        borderRadius: '24px',
        padding: '32px 28px',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        maxWidth: '380px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    },
    menuLogo: {
        marginBottom: '12px',
    },
    menuTitle: {
        fontSize: '26px',
        fontWeight: 800,
        marginBottom: '12px',
        background: 'linear-gradient(135deg, #ffcc00, #ff9500)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    menuText: {
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '16px',
        lineHeight: 1.5,
    },
    itemsPreview: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '16px',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    highScoreText: {
        fontSize: '18px',
        color: '#ffcc00',
        fontWeight: 600,
        marginBottom: '20px',
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
        boxShadow: '0 8px 24px rgba(255, 204, 0, 0.35)',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    controls: {
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: '16px',
    },
    finalScore: {
        fontSize: '48px',
        fontWeight: 800,
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
        color: 'rgba(255, 255, 255, 0.5)',
        textDecoration: 'none',
        fontSize: '14px',
    },
};
