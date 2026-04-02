import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../lib/data';

// Enhanced Typing Animation Component
const Typewriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse text-blue-600">|</span>
    </span>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-xl" />
        </FloatingElement>

        <FloatingElement delay={2}>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 blur-xl" />
        </FloatingElement>

        <FloatingElement delay={4}>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-15 blur-lg" />
        </FloatingElement>

        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 right-20 w-20 h-20 border-2 border-blue-200 rounded-lg opacity-20"
        />

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-20 w-16 h-16 border-2 border-purple-200 rounded-full opacity-20"
        />

        {/* Code-like particles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-1/3 text-blue-300 text-2xl font-mono opacity-30"
        >
          {'</>'}
        </motion.div>

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/3 text-purple-300 text-xl font-mono opacity-20"
        >
          {'{ }'}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Profile Image with enhanced styling */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          className="relative mx-auto mb-8"
        >
          <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            <span className="relative z-10">{personalInfo.avatar}</span>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 -z-10" />
        </motion.div>

        {/* Main heading with enhanced typography */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight"
        >
          <Typewriter text={personalInfo.name} delay={600} />
        </motion.h1>

        {/* Title with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6"
        >
          <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.title}
          </span>
        </motion.div>

        {/* Subtitle with better styling */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-4 font-medium"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 italic"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Enhanced CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              View My Work
              <motion.svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group relative border-2 border-gradient-to-r border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              Get In Touch
              <motion.span
                className="ml-2"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;