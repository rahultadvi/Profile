import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
};

const Home = memo(() => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Animated background elements – smaller on mobile */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-56 h-56 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 md:w-80 md:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20 min-h-screen flex items-center">
        {/* Grid: single column on mobile, two columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: Text content */}
          <motion.div
            className="text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 md:mb-4"
              variants={itemVariants}
            >
              Hi There,
            </motion.h1>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4"
              variants={itemVariants}
            >
              I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rahul Tadvi
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8"
              variants={itemVariants}
            >
              <span className="relative inline-block">
                Full Stack Developer
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link
                to="/about"
                className="group relative px-6 py-3 sm:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <span className="relative z-10">About Me</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>

              <a
                href="#contact"
                className="px-6 py-3 sm:px-8 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links – centered on mobile */}
            <motion.div
              className="flex gap-6 mt-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              {['linkedin', 'github', 'twitter'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com/rahultadvi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 -m-2"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-8 h-8 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    {platform === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                    )}
                    {platform === 'github' && (
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    )}
                    {platform === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.337-4.977 13.94 13.94 0 001.548-5.949c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    )}
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: Illustration – visible on all screens, centered on mobile */}
          <motion.div
            className="relative block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              {/* Background tilt – smaller rotation on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-500" />
              {/* Foreground card – smaller offset on mobile to keep it centered */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center transform -translate-x-2 -translate-y-2 sm:-translate-x-3 sm:-translate-y-3 md:-translate-x-4 md:-translate-y-4 hover:translate-x-0 hover:translate-y-0 transition-transform duration-500">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3 sm:mb-4 flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                  RK
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Rahul Tadvi</h3>
                <p className="text-sm sm:text-base text-gray-600">Full Stack Developer</p>
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4 justify-center">
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">React</span>
                  <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">Node.js</span>
                  <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm">Python</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator – extra bottom margin on mobile */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll" />
        </div>
      </motion.div>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;