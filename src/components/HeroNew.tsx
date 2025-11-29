import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function HeroNew() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950"
    >
      {/* Optimized Background: Simple CSS Grid + Radial Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950" />

        {/* Subtle animated grid pattern (CSS only) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(100, 200, 255, .1) 25%, rgba(100, 200, 255, .1) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, .1) 75%, rgba(100, 200, 255, .1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(100, 200, 255, .1) 25%, rgba(100, 200, 255, .1) 26%, transparent 27%, transparent 74%, rgba(100, 200, 255, .1) 75%, rgba(100, 200, 255, .1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial glow accent (bottom right) */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-white">Yusuf</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ali
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light">
            Full-Stack Engineer crafting{' '}
            <span className="text-cyan-300 font-medium">scalable solutions</span> and seamless digital experiences. 
            Cloud-native. Blockchain curious.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-lg transition-all duration-300 hover:gap-3"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:yusufdupsc1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-slate-100 font-semibold rounded-lg transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 pt-8 border-t border-slate-800"
        >
          {[
            { icon: Github, href: 'https://github.com/yusufdupsc1', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/yusuf-ali-16b890216', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com/EsrafilSaikot', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-slate-400 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
