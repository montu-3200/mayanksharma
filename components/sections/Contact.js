import { motion } from 'framer-motion';
import { contactData, socialLinks } from '../../lib/data';
import { AnimatedSection, AnimatedDiv } from '../../lib/animations';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {contactData.title}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life? Let&apos;s create something amazing together.
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <AnimatedDiv delay={0.2}>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.h3
                  className="text-3xl font-bold text-gray-800 mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Let&apos;s Work Together
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {contactData.description}
                </motion.p>
              </div>

              {/* Contact Details */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: (
                      <>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </>
                    ),
                    label: 'Email',
                    value: contactData.email,
                    href: `mailto:${contactData.email}`
                  },
                  {
                    icon: (
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    ),
                    label: 'Location',
                    value: contactData.location
                  }
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href || '#'}
                    className="flex items-center group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-shadow"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {item.icon}
                      </svg>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-gray-800 text-lg">{item.label}</div>
                      <div className="text-gray-600 group-hover:text-blue-600 transition-colors">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: social.color || '#3B82F6'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatedDiv>

          {/* Contact Form */}
          <AnimatedDiv delay={0.4}>
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-800 mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Send a Message
              </motion.h3>

              <motion.form
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your Name', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                  { label: 'Email', type: 'email', placeholder: 'your@email.com', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                  { label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }
                ].map((field, index) => (
                  <motion.div key={field.label}>
                    <motion.label
                      className="block text-gray-700 font-medium mb-2"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      viewport={{ once: true }}
                    >
                      {field.label}
                    </motion.label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d={field.icon} />
                        </svg>
                      </div>
                      {field.type === 'textarea' ? (
                        <textarea
                          className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder={field.placeholder}
                          rows="4"
                        />
                      ) : (
                        <input
                          type={field.type}
                          className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8
                  }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </motion.button>
              </motion.form>
            </motion.div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;