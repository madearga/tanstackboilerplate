const features = [
  {
    title: "React Compiler",
    description: "Automatic optimization with React 19's new compiler for better performance",
    icon: "⚡",
  },
  {
    title: "SSR/SSG Ready",
    description: "Server-side rendering and static generation built-in for SEO optimization",
    icon: "🌐",
  },
  {
    title: "Type-Safe APIs",
    description: "End-to-end type safety across the entire stack with zero runtime errors",
    icon: "🔒",
  },
  {
    title: "Modern Tooling",
    description: "Vite 8, Nitro v3, and cutting-edge build tools for instant feedback",
    icon: "🛠️",
  },
  {
    title: "Database First",
    description: "Drizzle ORM with type-safe database operations and zero configuration",
    icon: "🗄️",
  },
  {
    title: "Auth Built-In",
    description: "Better Auth with OAuth providers and session management ready to use",
    icon: "🔐",
  },
  {
    title: "UI Components",
    description: "shadcn/ui + Base UI for beautiful, accessible interfaces out of the box",
    icon: "🎨",
  },
  {
    title: "Developer Experience",
    description: "Hot reload, TypeScript, and instant feedback for maximum productivity",
    icon: "💎",
  },
  {
    title: "Performance",
    description: "Optimized bundle size and lazy loading for sub-50kb initial load",
    icon: "🚀",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-32 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Carefully chosen technologies and patterns for building modern web applications
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 border border-gray-800 rounded-2xl bg-gray-900/20 hover:bg-gray-900/40 transition-all duration-500 hover:border-gray-700"
            >
              <div className="text-4xl mb-6 opacity-80">{feature.icon}</div>
              <h3 className="text-xl font-medium text-white mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Bento Style */}
        <div className="mt-20">
          <div className="relative p-12 border border-gray-800 rounded-3xl bg-gray-900/20 backdrop-blur-sm">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-thin text-white mb-6">
                Ready to build something extraordinary?
              </h3>
              <p className="text-xl text-gray-400 font-light mb-8">
                Join thousands of developers building the future of the web
              </p>
              <button className="px-10 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
