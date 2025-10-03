import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Freelance & Contract Work',
    period: '2020 - Present',
    description: 'Building scalable web applications using React, Next.js, Django, and AWS. Specialized in full-stack development, API design, and cloud architecture.',
    achievements: [
      'Delivered 50+ production applications for clients worldwide',
      'Architected and deployed cloud-native solutions on AWS',
      'Maintained 95%+ client satisfaction rate',
      'Led technical architecture for multiple SaaS products'
    ]
  },
  {
    type: 'education',
    title: 'Computer Science & Engineering',
    company: 'University Studies',
    period: '2018 - 2022',
    description: 'Focused on software engineering, algorithms, data structures, and system design. Active in coding competitions and tech communities.',
    achievements: [
      'Strong foundation in CS fundamentals',
      'Participated in multiple hackathons',
      'Built several academic and personal projects',
      'Active member of university tech club'
    ]
  }
]

const achievements = [
  {
    icon: Award,
    title: '50+ Projects',
    description: 'Successfully delivered and deployed'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'AWS & Blockchain certifications in progress'
  },
  {
    icon: Briefcase,
    title: 'Open Source',
    description: 'Active contributor to community projects'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience & Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              My path in software development and continuous growth
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-slate-950"></div>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${exp.type === 'work' ? 'bg-cyan-500/10' : 'bg-blue-500/10'} flex items-center justify-center flex-shrink-0`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-100">{exp.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-cyan-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-slate-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-slate-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{achievement.title}</h3>
                  <p className="text-slate-400 text-sm">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
