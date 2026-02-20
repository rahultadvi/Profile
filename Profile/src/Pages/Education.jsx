import { memo, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Education data – updated with your information
const EDUCATION_DATA = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Indrashil University',
    location: 'India',
    period: '2021 – 2025',
    gpa: 'CGPA: 8.5/10',
    description:
      'Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Networking, Cloud Computing.',
    achievements: [
      'Participated in hackathons and coding competitions',
      'Member of University Tech Club',
    ],
    logo: '🏛️',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    degree: 'High School Diploma',
    institution: 'Jai Ram Krishna Institution English Medium School',
    location: 'Navagam, India',
    period: '2019 – 2021',
    gpa: 'Percentage: 85%',
    description:
      'Completed Higher Secondary Education with focus on Science and Computer Science.',
    achievements: [
      'School Topper in Computer Science',
      'Active participant in science exhibitions',
    ],
    logo: '🏫',
    color: 'from-purple-500 to-pink-400',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 },
  },
};

// Individual education card component
const EducationCard = ({ edu, index }) => {
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
      className={`relative flex items-start md:justify-between ${
        index % 2 === 0 ? '' : 'md:flex-row-reverse'
      } group`}
    >
      {/* Timeline dot with number */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
        {index + 1}
      </div>

      {/* Content card */}
      <div className="ml-16 md:ml-0 md:w-5/12 md:even:ml-auto md:odd:mr-auto">
        <motion.div
          className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

          <div className="relative z-10">
            {/* Header with icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span role="img" aria-label="institution logo">
                  {edu.logo}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
              </div>
            </div>

            {/* Location & period */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-3">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {edu.location}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {edu.period}
              </span>
            </div>

            {/* GPA badge */}
            <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              {edu.gpa}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4 leading-relaxed">{edu.description}</p>

            {/* Achievements */}
            {edu.achievements.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-1 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {ach}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Decorative corner accent */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-3xl`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = memo(() => {
  return (
    <section id="education" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
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
            Education <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line (hidden on mobile, centered on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400" />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {EDUCATION_DATA.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Optional extra note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * Hover over cards for more details and animations
        </motion.p>
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

Education.displayName = 'Education';

export default Education;