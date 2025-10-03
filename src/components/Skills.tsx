const skillCategories = [
  {
    title: 'Frontend',
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 95 },
    ]
  },
  {
    title: 'Backend',
    gradient: 'from-blue-500 to-violet-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP/Laravel', level: 80 },
      { name: 'GraphQL', level: 75 },
    ]
  },
  {
    title: 'Database & Cloud',
    gradient: 'from-violet-500 to-pink-500',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Redis', level: 75 },
    ]
  },
  {
    title: 'Tools & Others',
    gradient: 'from-pink-500 to-cyan-500',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Linux', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'Blockchain', level: 70 },
      { name: 'WordPress', level: 80 },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technology Arsenal
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit honed through years of hands-on experience building production-grade applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Blockchain & Smart Contracts', 'AWS Solutions Architecture', 'Advanced System Design', 'Web3 & DeFi'].map((item, idx) => (
                <span
                  key={idx}
                  className="px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-full text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
