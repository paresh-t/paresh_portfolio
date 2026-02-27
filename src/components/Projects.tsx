import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Folder, TrendingUp, Target, Zap } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Enterprise Banking Automation Framework',
      icon: Folder,
      problem: 'Critical banking workflows required robust automation to ensure zero-defect releases and faster feedback cycles',
      technologies: ['Selenium', 'Java', 'TestNG', 'BDD', 'Jenkins', 'Rest Assured'],
      outcomes: [
        'Reduced regression cycle time by 60%',
        'Achieved 85% automation coverage',
        'Integrated with CI/CD for continuous testing',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Microservices API Automation Suite',
      icon: Target,
      problem: 'Complex microservices architecture needed comprehensive API testing to catch integration defects early',
      technologies: ['Rest Assured', 'Java', 'TestNG', 'Jenkins', 'Docker'],
      outcomes: [
        'Expanded API coverage by 25%',
        'Reduced integration defects by 40%',
        'Automated contract testing across services',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'CI/CD Integrated Test Pipeline',
      icon: Zap,
      problem: 'Manual testing bottlenecks delayed releases and reduced deployment frequency',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Selenium', 'Kubernetes'],
      outcomes: [
        'Improved build stability by 40%',
        'Enabled continuous testing on every commit',
        'Reduced deployment time from days to hours',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cross-Platform Test Automation',
      icon: TrendingUp,
      problem: 'Web and mobile applications required consistent quality across multiple platforms and devices',
      technologies: ['Selenium', 'Appium', 'Cypress', 'BrowserStack', 'Java'],
      outcomes: [
        'Achieved cross-browser compatibility',
        'Validated UI consistency across 10+ devices',
        'Reduced manual testing effort by 50%',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Problem Statement</h4>
                    <p className="text-slate-300 text-sm">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Outcomes</h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-primary-400 mt-0.5">▹</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
