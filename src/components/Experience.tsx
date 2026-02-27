import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Synechron',
      client: 'UBS',
      location: 'Pune, MH',
      role: 'Lead QA Engineer',
      duration: 'Feb 2025 – Present',
      achievements: [
        'Designed and enhanced scalable UI automation frameworks using Selenium, Java, TestNG, and BDD for critical banking workflows',
        'Implemented API automation using Rest Assured for microservices-based systems, reducing integration defects',
        'Integrated automation suites into Jenkins CI/CD pipelines for continuous testing and faster feedback',
        'Performed root cause analysis to reduce recurring defects and production leakage',
        'Mentored junior QA engineers on framework design, automation best practices, and Agile testing',
      ],
    },
    {
      company: 'Vegrow',
      location: 'Pune, MH',
      role: 'Senior QA Engineer',
      duration: 'Oct 2021 – Jan 2025',
      achievements: [
        'Built and maintained Selenium-based automation framework, reducing manual regression effort by ~50%',
        'Expanded API automation coverage by ~25% using Rest Assured',
        'Integrated test suites with Jenkins and GitHub Actions, improving build stability by ~40%',
        'Executed cross-browser and cross-device testing for UI consistency',
        'Led and mentored a 4-member QA team with strong test strategy ownership',
      ],
    },
    {
      company: 'Dkatalis',
      location: 'Pune, MH',
      role: 'QA Engineer',
      duration: 'Apr 2021 – Sep 2021',
      achievements: [
        'Developed UI automation using Selenium and Java for responsive web applications',
        'Conducted exploratory testing to identify usability gaps and edge cases',
        'Performed multi-browser and multi-device validation',
        'Logged, tracked, and prioritized defects using JIRA',
      ],
    },
    {
      company: 'AgroStar',
      location: 'Pune, MH',
      role: 'Software Development Engineer in Test (SDET)',
      duration: 'Sep 2017 – Mar 2021',
      achievements: [
        'Designed and implemented automation frameworks with Selenium and Java',
        'Deployed automation pipelines on Jenkins for Continuous Testing',
        'Estimated test effort and managed defects for Salesforce CRM projects',
        'Executed regression testing for every build release',
        'Analyzed, documented, and executed comprehensive test scenarios',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Professional <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {exp.company}
                      {exp.client && (
                        <span className="text-primary-400"> (Client: {exp.client})</span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Briefcase size={18} />
                      <span className="text-lg font-semibold text-slate-300">{exp.role}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={18} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin size={18} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-primary-400 mt-1.5 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
