import { motion } from 'framer-motion';
import { skillsData } from '../../lib/data';
import { AnimatedSection, AnimatedDiv } from '../../lib/animations';

const Skills = () => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <AnimatedDiv key={category.category} index={categoryIndex}>
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg h-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-6 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {category.category}
                </motion.h3>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: skillIndex * 0.1
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 10,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.div
                        className={`w-3 h-3 ${colorClasses[category.color]} rounded-full mr-4 flex-shrink-0`}
                        whileHover={{
                          scale: 1.5,
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;