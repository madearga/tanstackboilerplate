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
    <section className="py-32 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-thin text-white mb-6">
            Get started in minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            From zero to production-ready app faster than ever before
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "scale-[1.02]" : "hover:scale-[1.01]"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activeStep === index
                      ? "border-gray-600 bg-gray-900/50"
                      : "border-gray-800 bg-gray-900/20 hover:border-gray-700"
                  }`}
                >
                  {/* Step number */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-300 ${
                        activeStep === index
                          ? "bg-white text-black"
                          : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`text-lg font-medium mb-2 transition-colors duration-300 ${
                          activeStep === index ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="sticky top-8">
            <div className="relative">
              {/* Shadow */}
              <div className="absolute top-4 left-4 w-full h-full bg-gray-950 rounded-2xl -z-10" />

              {/* Terminal window */}
              <div className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-6 py-4 bg-gray-950 border-b border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-gray-500 text-sm font-mono">terminal</span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-8 min-h-[320px] font-mono text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-400">
                      <span className="text-green-500">$</span>
                      <span className="text-gray-300">{displayedCommand}</span>
                      {displayedCommand.length < steps[activeStep].command.length && (
                        <span className="inline-block w-2 h-5 bg-white animate-pulse" />
                      )}
                    </div>

                    {activeStep === steps.length - 1 && (
                      <div className="mt-6 pt-6 border-t border-gray-800">
                        <div className="flex items-center gap-2 text-green-500 animate-pulse">
                          <span>✓</span>
                          <span>Development server running on http://localhost:3000</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex-1 px-6 py-3 bg-gray-900 text-gray-400 rounded-lg hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border border-gray-800"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="flex-1 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
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
