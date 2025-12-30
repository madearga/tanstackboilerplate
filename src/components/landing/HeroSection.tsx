export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Anti-Hero approach - minimal and confident */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-white mb-8">
            Forget everything you know about boilerplates.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            TanStackBoilerplate is the last template you'll ever need.
            Modern, type-safe, and production-ready out of the box.
          </p>

          {/* Simple CTA - no flashy buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <input
              type="email"
              placeholder="Enter your email to get started"
              className="w-full sm:w-96 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>

          {/* Subtle feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-medium text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-500 text-sm">Built on Vite 8 with instant HMR</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium text-white mb-2">Type-Safe</h3>
              <p className="text-gray-500 text-sm">End-to-end TypeScript coverage</p>
            </div>
            <div className="p-8 border border-gray-800 rounded-2xl bg-gray-900/20 backdrop-blur-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-medium text-white mb-2">Production Ready</h3>
              <p className="text-gray-500 text-sm">Deploy anywhere with Nitro v3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-gray-800 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
