import { useState, useEffect } from "react";

const steps = [
  {
    title: "Clone the repository",
    command: "git clone https://github.com/madearga/tanstackboilerplate.git my-app",
    description: "Get started in seconds with our starter template",
  },
  {
    title: "Install dependencies",
    command: "cd my-app && pnpm install",
    description: "Lightning-fast installation with pnpm",
  },
  {
    title: "Configure environment",
    command: "cp .env.example .env",
    description: "Set up your database and API keys",
  },
  {
    title: "Deploy database",
    command: "pnpm db push",
    description: "Push your schema to production with Drizzle",
  },
  {
    title: "Start development",
    command: "pnpm dev",
    description: "Launch your app and start building",
  },
];

export default function GettingStarted() {
  const [activeStep, setActiveStep] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");

  useEffect(() => {
    const command = steps[activeStep].command;
    let i = 0;

    const timer = setInterval(() => {
      if (i < command.length) {
        setDisplayedCommand(command.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [activeStep]);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get Started in 5 Minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From zero to production-ready app faster than ever
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    activeStep === index
                      ? "border-cyan-400 bg-cyan-400/5"
                      : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
                  }`}
                >
                  {/* Step number */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        activeStep === index
                          ? "bg-cyan-400 text-black"
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          activeStep === index ? "text-cyan-400" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {activeStep === index && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl opacity-20 animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="sticky top-8">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-2xl" />

              {/* Terminal window */}
              <div className="relative bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 text-sm font-mono">terminal</span>
                  </div>
                  <div className="text-gray-500 text-sm">▲</div>
                </div>

                {/* Terminal content */}
                <div className="p-6 min-h-[300px] font-mono text-sm">
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-cyan-400">my-app</span>
                    <span className="text-gray-500">~</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-green-400">$</span>
                      <span className="text-gray-300">{displayedCommand}</span>
                      <span className="inline-block w-2 h-5 bg-green-400 animate-pulse" />
                    </div>

                    {activeStep === steps.length - 1 && (
                      <div className="mt-4 text-green-400 animate-pulse">
                        ✓ Development server running on http://localhost:3000
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
              </div>

              {/* Success animation */}
              {activeStep === steps.length - 1 && (
                <div className="absolute -top-4 -right-4 text-6xl animate-bounce">🎉</div>
              )}
            </div>

            {/* Quick actions */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex-1 px-4 py-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
