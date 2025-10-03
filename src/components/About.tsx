import { Code2, Rocket, Brain, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Hey there! I'm <span className="text-cyan-400 font-semibold">Yusuf Ali</span>, a passionate Full-Stack Developer from Dhaka, Bangladesh, with a deep love for crafting scalable web applications and exploring the cutting edge of technology.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    With expertise spanning <span className="text-cyan-400">React, Next.js, TypeScript, Python, Django, Node.js, and AWS</span>, I specialize in building robust systems that deliver exceptional user experiences while maintaining clean, maintainable code.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Currently exploring the fascinating world of <span className="text-blue-400">Blockchain & Web3</span>, working towards AWS certification, and always excited to collaborate on impactful projects that push boundaries.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-slate-400 text-sm">Years Coding</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-slate-400 text-sm">Projects Built</div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Clean Architecture</h3>
                    <p className="text-slate-400">Writing maintainable, scalable code following industry best practices and design patterns.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Performance Focused</h3>
                    <p className="text-slate-400">Optimizing applications for speed, scalability, and exceptional user experiences.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Continuous Learning</h3>
                    <p className="text-slate-400">Always exploring new technologies, frameworks, and methodologies to stay ahead.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Heart className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">Community Driven</h3>
                    <p className="text-slate-400">Contributing to open source, mentoring developers, and sharing knowledge through writing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
