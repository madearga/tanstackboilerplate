import { useState } from "react";

const techStack = [
  {
    name: "React 19",
    description: "Latest version with React Compiler for automatic optimization",
    icon: "⚛️",
    code: `import { useState } from 'react'

function Component() {
  const [count, setCount] = useState(0)
  return <div>{count}</div>
}`,
  },
  {
    name: "TanStack",
    description: "Complete ecosystem: Start, Router, Query for modern web apps",
    icon: "🚀",
    code: `import { createRouter } from '@tanstack/react-router'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})`,
  },
  {
    name: "TypeScript",
    description: "Full type safety with zero configuration",
    icon: "📘",
    code: `type User = {
  id: string
  name: string
  email: string
}

const user: User = {
  id: '1',
  name: 'John',
  email: 'john@example.com',
}`,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS with design system built-in",
    icon: "🎨",
    code: `<div className="
  p-6
  bg-gradient-to-r
  from-gray-800
  to-gray-900
  rounded-lg
  shadow-xl
">
  Hello World
</div>`,
  },
  {
    name: "Drizzle ORM",
    description: "Type-safe SQL with zero runtime overhead",
    icon: "🗄️",
    code: `import { pgTable, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
})`,
  },
  {
    name: "Better Auth",
    description: "Modern authentication with built-in providers",
    icon: "🔐",
    code: `import { auth } from '@/lib/auth'

export const { signIn, signOut } = auth()`,
  },
];

export default function TechStackShowcase() {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);

  return (
    <section className="py-32 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Built with the best
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Modern technologies chosen for performance, developer experience, and maintainability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Tech Cards - Bento Box Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  selectedTech.name === tech.name
                    ? "border-gray-600 bg-gray-900/50"
                    : "border-gray-800 bg-gray-900/20 hover:border-gray-700"
                }`}
                onClick={() => setSelectedTech(tech)}
              >
                <div className="text-3xl mb-4 opacity-80">{tech.icon}</div>
                <h3 className="text-xl font-medium text-white mb-3">{tech.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.description}</p>

                {selectedTech.name === tech.name && (
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="w-2 h-2 bg-white rounded-full opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Code Preview - Isometric Panel */}
          <div className="relative">
            {/* Isometric shadow */}
            <div className="absolute top-4 left-4 w-full h-full bg-gray-900 rounded-2xl -z-10" />

            {/* Main code panel */}
            <div className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-gray-950 border-b border-gray-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-500 text-sm font-mono">
                    {selectedTech.name.toLowerCase()}.tsx
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-8 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                  <code>{selectedTech.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
