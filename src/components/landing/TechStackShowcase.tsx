import { useState } from "react";

const techStack = [
  {
    name: "React 19",
    description: "Latest version with React Compiler for automatic optimization",
    icon: "⚛️",
    color: "from-blue-400 to-cyan-400",
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
    color: "from-red-400 to-orange-400",
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
    color: "from-blue-500 to-blue-600",
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
    color: "from-cyan-400 to-blue-500",
    code: `<div className="
  p-6
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
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
    color: "from-orange-400 to-red-400",
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
    color: "from-green-400 to-emerald-500",
    code: `import { auth } from '@/lib/auth'

export const { signIn, signOut } = auth()`,
  },
];

export default function TechStackShowcase() {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);

  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge technologies for maximum performance and developer experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tech Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-500 hover:scale-105 ${
                  selectedTech.name === tech.name
                    ? "border-cyan-400 bg-cyan-400/5"
                    : "border-gray-800 bg-gray-900/50 hover:border-gray-600"
                }`}
                onClick={() => setSelectedTech(tech)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>

                {selectedTech.name === tech.name && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl opacity-20 blur animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Code Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-mono">
                    {selectedTech.name}.tsx
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300">
                  <code>{selectedTech.code}</code>
                </pre>
              </div>

              {/* Gradient border effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedTech.color} opacity-50`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
