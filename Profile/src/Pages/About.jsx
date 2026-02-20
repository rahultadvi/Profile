import { memo, useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import your profile image (same as in Home and Navbar)
import profilePic from '../assets/photo.png'; // <-- adjust path

// Content (easily updatable)
const ABOUT_CONTENT = {
  name: 'Rahul Tadvi',
  role: 'Full Stack Developer',
  location: 'Ahemdabad, India',
  bio: `I'm a passionate full stack developer with a love for crafting elegant, scalable solutions. 
  I thrive on turning complex problems into simple, intuitive experiences. 
  When I'm not coding, you'll find me exploring new tech, contributing to open source, or mentoring aspiring developers.`,
  description: `I have a strong foundation in both frontend and backend technologies including 
  React, Node.js, Python, and cloud platforms. I believe in writing clean, 
  maintainable code and continuously learning new tools to build scalable solutions.`,
  stats: [
    { value: 3, label: 'Years Experience', suffix: '+' },
    { value: 20, label: 'Projects Completed', suffix: '+' },
    { value: 10, label: 'Technologies', suffix: '+' },
  ],
  skills: [
    { name: 'React / Next.js', level: 90, color: 'from-blue-500 to-cyan-400' },
    { name: 'Node.js / Express', level: 85, color: 'from-green-500 to-emerald-400' },
    { name: 'Python / Django', level: 80, color: 'from-yellow-500 to-amber-400' },
    { name: 'TypeScript', level: 75, color: 'from-blue-500 to-indigo-400' },
    { name: 'MongoDB / PostgreSQL', level: 80, color: 'from-green-500 to-teal-400' },
    { name: 'Tailwind CSS', level: 90, color: 'from-purple-500 to-pink-400' },
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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

// Stat counter component
const StatCounter = ({ value, label, suffix, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-white/20"
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-gray-600 mt-1">{label}</div>
    </motion.div>
  );
};

// Skill bar with animated width
const SkillBar = ({ name, level, color, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%` });
    }
  }, [controls, inView, level]);

  return (
    <motion.div
      ref={ref}
      className="mb-4"
      variants={itemVariants}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay }}
        />
      </div>
    </motion.div>
  );
};

const About = memo(() => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 -z-5 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header with gradient and floating elements */}
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-16 text-center overflow-hidden">
            {/* Animated shapes */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute -top-20 -left-20 w-60 h-60 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full"
                animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Profile image with floating animation */}
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-md opacity-75 animate-pulse" />
              <img
                src={profilePic}
                alt={ABOUT_CONTENT.name}
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mt-4"
              variants={itemVariants}
            >
              {ABOUT_CONTENT.name}
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mt-2"
              variants={itemVariants}
            >
              {ABOUT_CONTENT.role}
            </motion.p>

            <motion.p
              className="text-blue-200 mt-2 flex items-center justify-center gap-1"
              variants={itemVariants}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {ABOUT_CONTENT.location}
            </motion.p>

            {/* Social links */}
            <motion.div
              className="flex justify-center gap-5 mt-6"
              variants={itemVariants}
            >
              {Object.entries(ABOUT_CONTENT.social).map(([platform, url], index) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors relative group"
                  aria-label={platform}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {platform}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              className="mt-8"
              variants={itemVariants}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Content */}
          <div className="px-6 py-12 sm:p-10">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 inline-block relative"
              variants={itemVariants}
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-4"
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

            {/* Stats with counters */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
              variants={containerVariants}
            >
              {ABOUT_CONTENT.stats.map((stat, index) => (
                <StatCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>

            {/* Skills section */}
            <motion.div className="mt-12" variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 inline-block relative">
                Technical Skills
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </h3>
              <div className="space-y-4">
                {ABOUT_CONTENT.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={0.3 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="mt-12 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Add required animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
});

About.displayName = 'About';

export default About;