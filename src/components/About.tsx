import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Users, Award, BrainCircuit } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { icon: Code2, text: '11+ Years Experience', color: 'text-primary-400' },
    { icon: Rocket, text: 'Big Data + Spark Expert', color: 'text-purple-400' },
    {icon: BrainCircuit, text:'AI Specialist', color: 'text-yellow-400'},
    { icon: Users, text: 'Team Leadership', color: 'text-green-400' }
    //{ icon: Award, text: 'Enterprise Delivery', color: 'text-yellow-400' },
    
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                With 11+ years of experience in Data Engineering and Big Data technologies. Currently, I work as a Technology Lead, where I design and develop scalable ETL solutions for the banking domain. My expertise includes <span className="text-primary-400 font-semibold">Apache Spark, Hadoop, Hive, Azure Data Factory, Azure Databricks, Azure Data Lake, SQL, and cloud-based data engineering.</span> I enjoy building efficient, high-performance data pipelines and solving complex data challenges.
              </p>
              <p  className="text-lg text-slate-300 leading-relaxed">
                Throughout my career, I have worked on enterprise data platforms, cloud migration, and end-to-end ETL implementations. My responsibilities include <span className="text-primary-400 font-semibold">solution design, performance optimization, and mentoring team members.</span> I have also worked with Azure services, Power BI, SSIS, and .NET technologies, giving me a strong technical foundation.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I am now looking for an opportunity to contribute my expertise while continuing to learn and grow professionally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <item.icon className={`${item.color} mb-3`} size={32} />
                  <p className="text-slate-200 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
