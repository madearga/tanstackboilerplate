import { useEffect, useState } from "react";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "TanStackBoilerplate";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/20 to-lime-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Glitch effect title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 relative inline-block">
          <span className="relative z-10 font-mono tracking-tight">
            {displayText}
            {showCursor && <span className="animate-pulse">|</span>}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-400/30 blur-xl opacity-50" />
        </h1>

        {/* Subtitle with syntax highlighting effect */}
        <div className="text-xl md:text-2xl text-gray-400 mb-12 font-mono">
          <span className="text-cyan-400">const</span>{" "}
          <span className="text-green-400">boilerplate</span>{" "}
          <span className="text-gray-400">=</span>{" "}
          <span className="text-yellow-400">new</span>{" "}
          <span className="text-blue-400">TanStack</span>
          <span className="text-purple-400">()</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]">
            <span className="relative z-10 text-black font-bold text-lg">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative px-8 py-4 border-2 border-green-400/50 rounded-lg hover:border-green-400 transition-all duration-300 hover:bg-green-400/10">
            <span className="relative z-10 text-green-400 font-bold text-lg group-hover:text-black transition-colors duration-300">
              View Documentation
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 border border-gray-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">React 19</div>
            <div className="text-gray-400">Latest with Compiler</div>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-green-400/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">Type-Safe</div>
            <div className="text-gray-400">Full TypeScript Support</div>
          </div>
          <div className="p-6 border border-gray-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">Production</div>
            <div className="text-gray-400">Ready for Scale</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
