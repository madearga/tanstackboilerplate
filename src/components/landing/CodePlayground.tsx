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
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    const code = codeExamples[activeExample].code;
    let i = 0;

    const timer = setInterval(() => {
      if (i < code.length) {
        setDisplayedCode(code.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [activeExample]);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Code That Speaks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how TanStackBoilerplate makes complex things simple
          </p>
        </div>

        <div className="relative">
          {/* Background glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-2xl blur-2xl" />

          {/* Main code block */}
          <div className="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              {codeExamples.map((example, index) => (
                <button
                  key={example.title}
                  onClick={() => setActiveExample(index)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeExample === index
                      ? "bg-green-400/20 text-green-400 border border-green-400/50"
                      : "text-gray-400 hover:text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  {example.title}
                </button>
              ))}
            </div>

            {/* Code content */}
            <div className="relative p-8">
              {/* Line numbers */}
              <div className="absolute left-0 top-8 bottom-0 w-12 flex flex-col items-end pr-4 text-gray-600 font-mono text-sm border-r border-gray-800">
                {displayedCode.split('\n').map((_, i) => (
                  <div key={i} className="leading-6">
                    {i + 1}
                  </div>
                ))}
              </div>

              {/* Code */}
              <div className="ml-12 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {displayedCode}
                  <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse" />
                </pre>
              </div>
            </div>

            {/* Bottom gradient */}
            <div className="h-1 bg-gradient-to-r from-green-400 to-cyan-400" />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Lightning Fast</h3>
            <p className="text-gray-400">Optimized builds with Vite 8 and Rolldown</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Type Safe</h3>
            <p className="text-gray-400">End-to-end TypeScript with zero config</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-2xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Production Ready</h3>
            <p className="text-gray-400">Deploy anywhere with Nitro v3</p>
          </div>
        </div>
      </div>
    </section>
  );
}
