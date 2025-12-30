const features = [
  {
    title: "React Compiler",
    description: "Automatic optimization with React 19's new compiler",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    stats: "3x faster renders",
  },
  {
    title: "SSR/SSG Ready",
    description: "Server-side rendering and static generation built-in",
    icon: "🌐",
    color: "from-blue-400 to-purple-500",
    stats: "SEO optimized",
  },
  {
    title: "Type-Safe APIs",
    description: "End-to-end type safety across the entire stack",
    icon: "🔒",
    color: "from-green-400 to-emerald-500",
    stats: "Zero runtime errors",
  },
  {
    title: "Modern Tooling",
    description: "Vite 8, Nitro v3, and cutting-edge build tools",
    icon: "🛠️",
    color: "from-cyan-400 to-blue-500",
    stats: "Lightning fast HMR",
  },
  {
    title: "Database First",
    description: "Drizzle ORM with type-safe database operations",
    icon: "🗄️",
    color: "from-orange-400 to-red-500",
    stats: "Zero config",
  },
  {
    title: "Auth Built-In",
    description: "Better Auth with OAuth providers and sessions",
    icon: "🔐",
    color: "from-pink-400 to-rose-500",
    stats: "Production ready",
  },
  {
    title: "UI Components",
    description: "shadcn/ui + Base UI for beautiful interfaces",
    icon: "🎨",
    color: "from-violet-400 to-purple-500",
    stats: "Accessible by default",
  },
  {
    title: "Developer Experience",
    description: "Hot reload, TypeScript, and instant feedback",
    icon: "💎",
    color: "from-teal-400 to-cyan-500",
    stats: "Zero friction",
  },
  {
    title: "Performance",
    description: "Optimized bundle size and lazy loading",
    icon: "🚀",
    color: "from-red-400 to-pink-500",
    stats: "< 50kb initial",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why TanStackBoilerplate?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build modern web applications, nothing you don't
          </p>
        </div>

        {/* Hexagonal grid */}
        <div className="relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #00F5FF 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #CCFF00 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>

          {/* Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative p-8 h-full bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Glow effect */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-300`}>
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats badge */}
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${feature.color} bg-opacity-20 rounded-full border border-current border-opacity-30`}>
                      <span className="text-sm font-semibold bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-300">
                        {feature.stats}
                      </span>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`} />
                </div>

                {/* Floating accent */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Join thousands of developers using TanStackBoilerplate to ship faster
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-bold text-black hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 hover:scale-105">
              Start Building Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
