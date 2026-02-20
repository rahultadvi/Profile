import { memo, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Skill data – easily updatable
const skillsData = [
  { name: 'HTML5 & CSS3', icon: '🌐', level: 90, color: 'from-orange-400 to-red-500' },
  { name: 'JavaScript (ES6+)', icon: '⚡', level: 85, color: 'from-yellow-400 to-amber-500' },
  { name: 'React & Next.js', icon: '⚛️', level: 88, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', icon: '🟢', level: 80, color: 'from-green-400 to-emerald-500' },
  { name: 'Python', icon: '🐍', level: 75, color: 'from-blue-400 to-indigo-500' },
  { name: 'Express.js', icon: '🚂', level: 78, color: 'from-gray-500 to-gray-600' },
  { name: 'MongoDB', icon: '🍃', level: 70, color: 'from-green-500 to-teal-500' },
  { name: 'PostgreSQL', icon: '🐘', level: 72, color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', icon: '🎨', level: 85, color: 'from-teal-400 to-cyan-500' },
  { name: 'Git & GitHub', icon: '📦', level: 90, color: 'from-orange-500 to-red-600' },
  { name: 'REST APIs', icon: '🔌', level: 82, color: 'from-purple-400 to-pink-500' },
  { name: 'TypeScript', icon: '📘', level: 70, color: 'from-blue-500 to-indigo-600' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
};

// Skill card component with animated progress bar
const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${skill.level}%` });
    }
  }, [controls, inView, skill.level]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          {/* Icon with gradient circle */}
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span role="img" aria-label={skill.name}>
              {skill.icon}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
            <p className="text-sm text-gray-500">Proficiency</p>
          </div>
        </div>

        {/* Animated progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Beginner</span>
          <span className="font-semibold text-gray-800">{skill.level}%</span>
          <span className="text-gray-600">Expert</span>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-10 rounded-bl-3xl`} />
    </motion.div>
  );
};

const Skills = memo(() => {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 -z-5 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Additional callout */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            * Hover over cards to see details — proficiency percentages are self-assessed and constantly improving.
          </p>
        </motion.div>
      </div>

      {/* Required animations */}
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
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;