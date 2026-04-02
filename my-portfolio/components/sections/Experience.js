import { motion } from 'framer-motion';
import { experienceData } from '../../lib/data';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-6"
          />
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            My journey in technology and the impact I&apos;ve made along the way
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-green-400 to-teal-400 h-full rounded-full" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-4 border-white shadow-lg z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />

                {/* Content Card */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className={`ml-16 md:ml-0 w-full md:w-5/12 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                      {exp.position}
                    </h3>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    {exp.company}
                  </h4>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievement}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-gray-700"
                        >
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;