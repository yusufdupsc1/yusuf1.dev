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
      x: ['-16%', '18%', '-16%'],
      opacity: [0.4, 0.15, 0.32],
      transition: {
        duration: 22,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const glowVariants = {
    animate: {
      scale: [1, 1.06, 1],
      opacity: [0.6, 0.9, 0.6],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const shimmerVariants = {
    animate: {
      opacity: [0.45, 0.7, 0.45],
      scale: [1, 1.08, 1],
      transition: {
        duration: 16,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 night-sky" aria-hidden="true">
        <div className="absolute inset-0 starfield" />
        <motion.div className="absolute inset-0 aurora" variants={glowVariants} initial="animate" animate="animate" />
        <div className="absolute inset-x-0 top-0 bottom-[38%] gradient-haze" />
        <div className="absolute inset-x-0 bottom-0 h-[42%] water" />
        <div className="absolute inset-x-0 bottom-[34%] forest-line" />
        <div className="absolute inset-x-0 bottom-[32%] forest-line blur-[2px] opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
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
                <motion.div className="moon-shimmer" variants={shimmerVariants}></motion.div>
                <div className="moon-glow-ring" />
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute inset-[-20%] moon-halo"
              variants={glowVariants}
              initial="animate"
              animate="animate"
            ></motion.div>
            <motion.div className="moon-reflection" variants={shimmerVariants} initial="animate" animate="animate" />
            <span className="sr-only">Cinematic moon avatar with gentle motion</span>
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
