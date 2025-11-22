import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Twitter, Youtube } from 'lucide-react'

export default function Hero() {
  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      rotate: [-0.6, 0.6, -0.6],
      transition: {
        duration: 14,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const cloudVariants = {
    animate: {
      x: ['-12%', '10%', '-12%'],
      opacity: [0.28, 0.16, 0.28],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.65, 0.85, 0.65],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmEzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Avatar */}
          <div className="mb-10 inline-block relative group">
            <motion.div
              className="moon-frame w-48 h-48"
              initial="animate"
              animate="animate"
              variants={floatVariants}
            >
              <motion.div className="moon-backdrop" variants={glowVariants}></motion.div>
              <motion.div className="moon-orb" aria-hidden="true" variants={floatVariants}>
                <div className="moon-surface" />
                <motion.div className="moon-clouds" variants={cloudVariants}></motion.div>
                <div className="moon-glow-ring" />
              </motion.div>
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-cyan-200/30 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <span className="sr-only">Cinematic moon avatar</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Yusuf Ali
          </h1>

          {/* Subheading */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4 font-light">
            Full-Stack Developer • Cloud Architect • Blockchain Explorer
          </div>

          {/* Typing Animation Effect */}
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 h-8 font-mono">
            Building Scalable Full-Stack Applications 🚀
          </p>

          {/* Status Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
              ✓ Available for Opportunities
            </span>
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              📍 Dhaka, Bangladesh
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              💼 Full-Stack Development
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://ali-3d-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Portfolio
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:yusufdupsc1@gmail.com"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold text-slate-100 hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yusufdupsc1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yusuf-ali-16b890216"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/EsrafilSaikot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3rck9PkVZw4-WhO6IfIieg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
