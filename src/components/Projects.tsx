import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with Next.js, PostgreSQL, and Stripe.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    gradient: 'from-cyan-500 to-blue-500',
    featured: true
  },
  {
    title: 'Task Management SaaS',
    description: 'Real-time collaborative task management application with team workspaces, notifications, and analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'AWS'],
    gradient: 'from-blue-500 to-violet-500',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization and reporting.',
    tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'Chart.js'],
    gradient: 'from-violet-500 to-pink-500',
    featured: true
  },
  {
    title: 'Blockchain DApp',
    description: 'Decentralized application for token staking and rewards distribution. Smart contracts deployed on Ethereum testnet.',
    tech: ['Solidity', 'Web3.js', 'React', 'Hardhat', 'MetaMask'],
    gradient: 'from-pink-500 to-orange-500',
    featured: false
  },
  {
    title: 'API Gateway Service',
    description: 'Microservices API gateway with rate limiting, authentication, and request routing for enterprise applications.',
    tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    gradient: 'from-orange-500 to-yellow-500',
    featured: false
  },
  {
    title: 'Content Management System',
    description: 'Headless CMS with REST and GraphQL APIs, role-based access control, and media management.',
    tech: ['Django', 'GraphQL', 'PostgreSQL', 'React', 'AWS S3'],
    gradient: 'from-yellow-500 to-cyan-500',
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <div className="h-full flex items-center justify-center backdrop-blur-sm">
                    {project.featured && (
                      <span className="px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                    <button className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yusufdupsc1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
