import { motion } from 'framer-motion';
import { testimonialsData } from '../../lib/data';
import { fadeInUp, staggerContainer } from '../../lib/animations';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
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
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"
          />
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            What clients say about working with me
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-4 text-6xl text-purple-100 font-serif leading-none">
                &rdquo;
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;