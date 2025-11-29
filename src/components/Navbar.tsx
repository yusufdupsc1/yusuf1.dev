import { Briefcase, Code2, FileText, Github, Home, Linkedin, Mail, Menu, Sparkles, Twitter, User, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Throttle scroll updates using requestAnimationFrame for smoothness
    let ticking = false;
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        // Active section detection
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);

  const navItems = useMemo(
    () => [
      { name: 'Home', href: '#home', icon: Home },
      { name: 'About', href: '#about', icon: User },
      { name: 'Skills', href: '#skills', icon: Code2 },
      { name: 'Projects', href: '#projects', icon: Briefcase },
      { name: 'Contact', href: '#contact', icon: Mail },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { name: 'GitHub', href: 'https://github.com/yusufdupsc1', icon: Github, color: 'hover:text-purple-400' },
      { name: 'LinkedIn', href: '#linkedin', icon: Linkedin, color: 'hover:text-blue-400' },
      { name: 'Twitter', href: '#twitter', icon: Twitter, color: 'hover:text-cyan-400' },
    ],
    []
  );

  return (
    <>
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5 border-b border-white/5' 
            : 'bg-gradient-to-b from-slate-950 via-slate-900 to-transparent'
        }`}
      >
        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Ultra Professional Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="group flex items-center space-x-3"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative">
                  {/* Animated glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse"></div>
                  
                  {/* Logo container with icon */}
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
                    <div className="relative">
                      <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-cyan-400 animate-pulse" />
                      <Code2 className="w-7 h-7 text-transparent bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 bg-clip-text" style={{stroke: 'url(#gradient)'}} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#a78bfa" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Ultra Premium */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    {/* Content */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <Icon size={16} className={`${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'} transition-colors duration-300`} />
                      <span>{item.name}</span>
                    </span>
                    
                    {/* Animated underline */}
                    <div className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 transition-all duration-300 rounded-full ${
                      isActive 
                        ? 'w-3/4 -translate-x-1/2 opacity-100' 
                        : 'w-0 -translate-x-1/2 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                    }`}></div>
                  </a>
                );
              })}
              
              {/* Premium Resume Button */}
              <a
                href="#resume"
                className="group relative ml-4 flex items-center space-x-2 px-6 py-2.5 overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
                
                <FileText size={18} className="relative z-10 text-white" />
                <span className="relative z-10 text-white font-semibold text-sm">Resume</span>
              </a>

              {/* Premium Social Links */}
              <div className="flex items-center space-x-1 ml-4 pl-4 border-l border-white/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-2.5 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 rounded-lg blur transition-all duration-300"></div>
                      <Icon size={18} className="relative z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Premium Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="relative p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {/* Button glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-xl transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Ultra Premium Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="mx-4 mb-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/95 via-slate-900/98 to-slate-950/95 backdrop-blur-2xl shadow-2xl">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            
            <div className="relative px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center px-5 py-4 rounded-xl transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-cyan-500/30' 
                        : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Icon with glow */}
                    <div className="relative mr-4">
                      <div className={`absolute inset-0 ${isActive ? 'bg-cyan-400/30' : 'bg-cyan-400/0 group-hover:bg-cyan-400/20'} rounded-lg blur transition-all duration-300`}></div>
                      <Icon size={22} className={`relative z-10 ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'} transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    
                    <span className={`font-semibold text-base ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors duration-300`}>
                      {item.name}
                    </span>
                    
                    {/* Arrow indicator */}
                    <div className={`ml-auto transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    </div>
                  </a>
                );
              })}
              
              {/* Premium Resume Button Mobile */}
              <a
                href="#resume"
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-center space-x-3 px-6 py-4 mt-4 overflow-hidden rounded-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                <FileText size={20} className="relative z-10 text-white" />
                <span className="relative z-10 text-white font-bold text-base tracking-wide">Download Resume</span>
              </a>

              {/* Premium Social Section */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="px-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                  <span className="px-3">Connect</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                        aria-label={social.name}
                      >
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"></div>
                        
                        <Icon size={24} className="relative z-10 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:scale-110 mb-2" />
                        <span className="relative z-10 text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
