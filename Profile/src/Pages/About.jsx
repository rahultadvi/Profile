import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Content (easily updatable)
const ABOUT_CONTENT = {
  name: 'Rahul Tadvi',
  role: 'Full Stack Developer',
  location: 'Mumbai, India',
  bio: `I'm a passionate full stack developer with a love for crafting elegant, scalable solutions. 
  I thrive on turning complex problems into simple, intuitive experiences. 
  When I'm not coding, you'll find me exploring new tech, contributing to open source, or mentoring aspiring developers.`,
  description: `I have a strong foundation in both frontend and backend technologies including 
  React, Node.js, Python, and cloud platforms. I believe in writing clean, 
  maintainable code and continuously learning new tools to build scalable solutions.`,
  avatar: 'https://via.placeholder.com/150', // Replace with actual image
  stats: [
    { value: '3+', label: 'Years Experience', color: 'blue' },
    { value: '20+', label: 'Projects Completed', color: 'purple' },
    { value: '10+', label: 'Technologies', color: 'green' },
  ],
  skills: [
    { name: 'React / Next.js', level: 90, color: 'blue' },
    { name: 'Node.js / Express', level: 85, color: 'green' },
    { name: 'Python / Django', level: 80, color: 'yellow' },
    { name: 'TypeScript', level: 75, color: 'blue' },
    { name: 'MongoDB / PostgreSQL', level: 80, color: 'green' },
    { name: 'Tailwind CSS', level: 90, color: 'purple' },
  ],
  social: {
    linkedin: 'https://linkedin.com/in/rahultadvi',
    github: 'https://github.com/rahultadvi',
    twitter: 'https://twitter.com/rahultadvi',
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80 },
  },
};

const About = memo(() => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header with gradient */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center relative overflow-hidden"
          variants={itemVariants}
        >
          {/* Animated background shapes */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white rounded-full animate-pulse animation-delay-2000" />
          </div>

          <motion.div
            className="inline-block rounded-full border-4 border-white shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={ABOUT_CONTENT.avatar}
              alt={ABOUT_CONTENT.name}
              className="w-32 h-32 rounded-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-2">{ABOUT_CONTENT.name}</h1>
          <p className="text-xl text-blue-100">{ABOUT_CONTENT.role}</p>
          <p className="text-blue-200 mt-2 flex items-center justify-center gap-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {ABOUT_CONTENT.location}
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-4">
            {Object.entries(ABOUT_CONTENT.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label={platform}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
          </div>
        </motion.div>

        {/* Content */}
        <div className="px-8 py-10">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2 inline-block"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            {ABOUT_CONTENT.bio}
          </motion.p>
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            variants={itemVariants}
          >
            {ABOUT_CONTENT.description}
          </motion.p>

          {/* Stats cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
            variants={containerVariants}
          >
            {ABOUT_CONTENT.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={`bg-${stat.color}-50 p-5 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills section */}
          <motion.div className="mt-10" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {ABOUT_CONTENT.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      className={`bg-${skill.color}-500 h-2.5 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="mt-10 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
});

About.displayName = 'About';

export default About;