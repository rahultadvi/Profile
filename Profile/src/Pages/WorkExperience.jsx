import { memo, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Experience data – easily updatable
const experienceData = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'Zantatech solutions',
    location: 'Ahemdabad, India',
    period: 'June 2023 – August 2023',
    description:
      'Worked on developing and maintaining full-stack web applications using the MERN stack. Collaborated with the team to implement new features and improve performance.',
    achievements: [
      'Built responsive UI components with React and Tailwind CSS',
      'Developed RESTful APIs using Node.js and Express',
      'Optimized database queries, reducing response time by 20%',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    icon: '💼',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    role: 'Freelance Full Stack Developer',
    company: 'Self-employed',
    location: 'Remote',
    period: '2022 – Present',
    description:
      'Delivered end-to-end web solutions for small businesses and startups, from requirement gathering to deployment.',
    achievements: [
      'Designed and deployed 5+ responsive websites with modern tech stacks',
      'Integrated third-party APIs (payment gateways, maps)',
      'Provided ongoing maintenance and performance optimization',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Tailwind'],
    icon: '🖥️',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 3,
    role: 'Teaching Assistant (Web Development)',
    company: 'ERP Institute of Technology',
    location: 'Ahemdabad, India',
    period: 'Jan 2023 – May 2023',
    description:
      'Assisted professors in conducting web development labs and mentoring students.',
    achievements: [
      'Guided 30+ students in HTML, CSS, JavaScript, and React projects',
      'Conducted weekly doubt-clearing sessions and code reviews',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: '📚',
    color: 'from-purple-500 to-pink-400',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

// Individual experience card component with entrance animation
const ExperienceCard = ({ exp, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className={`relative flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
      }`}
    >
      {/* Timeline dot with number */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold shadow-md z-10">
        {index + 1}
      </div>

      {/* Content card */}
      <div
        className={`ml-14 md:ml-0 md:w-5/12 ${
          index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <motion.div
          className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-white/20 overflow-hidden"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          {/* Icon and role */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <span role="img" aria-label="company icon">{exp.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
            </div>
          </div>

          {/* Location & period */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {exp.location}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.period}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4">{exp.description}</p>

          {/* Achievements */}
          {exp.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          {exp.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Decorative corner accent */}
          <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${exp.color} opacity-10 rounded-bl-3xl`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const WorkExperience = memo(() => {
  return (
    <section id="work" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
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
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400" />

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS animations */}
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

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;