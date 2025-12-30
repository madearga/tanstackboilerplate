import { useState, useEffect } from "react";

const codeExamples = [
  {
    title: "Server-Side Rendering",
    language: "typescript",
    code: `import { createServerFn } from '@tanstack/react-start'

export const getUser = createServerFn()
  .handler(async () => {
    // This runs on the server
    const user = await db.user.findFirst()
    return { user }
  })`,
  },
  {
    title: "Type-Safe Routing",
    language: "typescript",
    code: `import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$userId')({
  component: UserProfile,
  loader: async ({ params }) => {
    return { userId: params.userId }
  },
})`,
  },
  {
    title: "React Query Integration",
    language: "typescript",
    code: `import { useQuery } from '@tanstack/react-query'

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users'),
  })
}`,
  },
];

export default function CodePlayground() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <section className="py-32 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Code that just works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Type-safe, performant, and developer-friendly by default
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Isometric code panel */}
          <div className="relative">
            {/* Shadow */}
            <div className="absolute top-6 left-6 w-full h-full bg-gray-950 rounded-2xl -z-10" />

            {/* Main panel */}
            <div className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              {/* Clean tabs */}
              <div className="flex gap-1 px-2 py-2 bg-gray-950 border-b border-gray-800">
                {codeExamples.map((example, index) => (
                  <button
                    key={example.title}
                    onClick={() => setActiveExample(index)}
                    className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                      activeExample === index
                        ? "bg-gray-800 text-white border border-gray-700"
                        : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
                    }`}
                  >
                    {example.title}
                  </button>
                ))}
              </div>

              {/* Code content */}
              <div className="p-12">
                <div className="flex items-start gap-4">
                  {/* Line numbers */}
                  <div className="text-gray-600 font-mono text-sm leading-relaxed select-none">
                    {codeExamples[activeExample].code.split('\n').map((_, i) => (
                      <div key={i} className="text-right pr-4">
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="flex-1 font-mono text-sm leading-relaxed overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
                      {codeExamples[activeExample].code}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features below */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-800 rounded-2xl bg-gray-900/20">
              <div className="text-3xl mb-4 opacity-80">⚡</div>
              <h3 className="text-lg font-medium text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-500 text-sm">Optimized builds with Vite 8 and Rolldown</p>
            </div>
            <div className="text-center p-8 border border-gray-800 rounded-2xl bg-gray-900/20">
              <div className="text-3xl mb-4 opacity-80">🛡️</div>
              <h3 className="text-lg font-medium text-white mb-2">Type Safe</h3>
              <p className="text-gray-500 text-sm">End-to-end TypeScript with zero config</p>
            </div>
            <div className="text-center p-8 border border-gray-800 rounded-2xl bg-gray-900/20">
              <div className="text-3xl mb-4 opacity-80">🎯</div>
              <h3 className="text-lg font-medium text-white mb-2">Production Ready</h3>
              <p className="text-gray-500 text-sm">Deploy anywhere with Nitro v3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
