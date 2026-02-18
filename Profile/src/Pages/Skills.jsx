import { memo } from 'react';
import { motion } from 'framer-motion';

// Skill data – easily updatable, can be moved to a separate file or fetched from API
const skillsData = [
  { name: 'HTML5 & CSS3', icon: '🌐', level: 90 },
  { name: 'JavaScript (ES6+)', icon: '⚡', level: 85 },
  { name: 'React & Next.js', icon: '⚛️', level: 88 },
  { name: 'Node.js', icon: '🟢', level: 80 },
  { name: 'Python', icon: '🐍', level: 75 },
  { name: 'Express.js', icon: '🚂', level: 78 },
  { name: 'MongoDB', icon: '🍃', level: 70 },
  { name: 'PostgreSQL', icon: '🐘', level: 72 },
  { name: 'Tailwind CSS', icon: '🎨', level: 85 },
  { name: 'Git & GitHub', icon: '📦', level: 90 },
  { name: 'REST APIs', icon: '🔌', level: 82 },
  { name: 'TypeScript', icon: '📘', level: 70 },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = memo(() => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient (consistent with other pages) */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Skills & Expertise</h1>
          <p className="text-xl text-blue-100">Technologies I work with</p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" role="img" aria-label={skill.name}>
                  {skill.icon}
                </span>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              </div>
              {/* Skill level progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;