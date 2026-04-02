import { motion } from 'framer-motion';
import { aboutData } from '../../lib/data';
import { AnimatedSection, AnimatedDiv } from '../../lib/animations';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
              {aboutData.title}
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedDiv delay={0.2}>
            <motion.h3
              className="text-2xl font-semibold text-gray-800 mb-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Who I Am
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {aboutData.description}
            </motion.p>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              My journey in tech started with a curiosity about how websites work, and it has evolved
              into a career where I get to build digital solutions that make a difference. I believe
              in writing clean, maintainable code and staying up-to-date with the latest technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {highlight}
                </motion.div>
              ))}
            </motion.div>
          </AnimatedDiv>

          <AnimatedDiv delay={0.4}>
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h4
                className="text-2xl font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Quick Facts
              </motion.h4>
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {aboutData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default About;