import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, TrendingUp, Users, Rotate3D } from 'lucide-react'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Optimized Large-Scale Spark Processing',
      description: 'Reduced Spark job processing latency by 30% through performance tuning, strategic partitioning, and caching, improving the efficiency of enterprise data pipelines',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Delivered Enterprise Data Engineering Solutions',
      description: 'Designed and developed scalable ETL pipelines using Apache Spark and Hadoop to process high-volume enterprise data for business-critical reporting and analytics',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rotate3D,
      title: 'Led Successful Cloud Migration Initiatives',
      description: 'Contributed to the migration of over 100 ETL pipelines from on-premises infrastructure to Microsoft Azure while ensuring data integrity and seamless production deployment',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Team Leadership & Mentorship',
      description: 'Led development teams by driving solution design, coordinating with stakeholders, mentoring team members, and ensuring successful delivery of enterprise data engineering projects',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Key <span className="text-primary-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{achievement.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
