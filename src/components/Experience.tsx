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
      client: 'Citi Bank',
      location: 'Pune, MH',
      role: 'Lead Big Data Developer',
      duration: 'Aug 2022 – Present',
      achievements: [
        'Architected and engineered high-performance Extract, Transform, Load (ETL) pipelines using Apache Spark YAML',
        'Optimized distributed Spark applications through strategic partitioning and caching, resulting in a 30% reduction in processing latency',
        'Spearheaded an automated Spark monitoring suite, improving data reliability and reducing manual intervention for load-count verification',
        'Directed the end-to-end CI/CD lifecycle using Jenkins and UCDeploy, ensuring zero-downtime release cycles',
      ],
    },
    {
      company: 'Infosys',
      location: 'Pune, MH',
      role: 'Technology Lead',
      duration: 'Dec 2017 – Aug 2022',
      achievements: [
        'Collaborated with clients to gather and analyze business and technical requirements, translating them into actionable implementation plans',
        'Prepared project implementation strategies, effort estimations, and timelines, and obtained client approval before execution',
        'Worked closely with the development team to design, develop, and implement data models and ETL pipelines in accordance with project requirements',
        'Represented production changes during Change Advisory Board (CAB) meetings, presenting deployment plans and securing approvals for production releases',
        'managed production deployments and configured workflows in Control-M to ensure reliable scheduling, monitoring, and execution of data pipelines',
      ],
    },
    {
      company: 'Boston Byte Pvt. Ltd.',
      location: 'Pune, MH',
      role: 'Software Developer',
      duration: 'Sep 2015 – Dec 2017',
      achievements: [
        'Manage Azure Portal and Services like HDInsight, Azure Data Warehouse, Azure Blob, etc',
        'Import the data into HDInsight/ Azure Data Warehouse from Azure Blob',
        'Process the data and store the data into Warehouse',
        'Use SSIS to process Microsoft Product feeds and send to all Microsft Affiliates world wide',
      ],
    },
    {
      company: 'Palash Healthcare',
      location: 'Pune, MH',
      role: 'Jr. Software Developer',
      duration: 'June 2014 – Aug 2015',
      achievements: [
        'Development of Reports Module of Palash IPD Silverlight Based application',
        'Development of Payroll Module Palash Payroll Application',
        'Technical Documentation',
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
