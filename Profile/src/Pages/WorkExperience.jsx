import { memo } from 'react';
import { motion } from 'framer-motion';

// Experience data – easily updatable, can be moved to separate file or fetched from API
const experienceData = [
  {
    id: 1,
    role: 'Full Stack Developer Intern',
    company: 'TechCorp Solutions',
    location: 'Mumbai, India',
    period: 'June 2023 – August 2023',
    description:
      'Worked on developing and maintaining full-stack web applications using the MERN stack. Collaborated with the team to implement new features and improve performance.',
    achievements: [
      'Built responsive UI components with React and Tailwind CSS',
      'Developed RESTful APIs using Node.js and Express',
      'Optimized database queries, reducing response time by 20%',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    logo: '💼', // Placeholder; replace with company logo if available
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
    logo: '🖥️',
  },
  {
    id: 3,
    role: 'Teaching Assistant (Web Development)',
    company: 'VJTI Mumbai',
    location: 'Mumbai, India',
    period: 'Jan 2023 – May 2023',
    description:
      'Assisted professors in conducting web development labs and mentoring students.',
    achievements: [
      'Guided 30+ students in HTML, CSS, JavaScript, and React projects',
      'Conducted weekly doubt-clearing sessions and code reviews',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    logo: '📚',
  },
];

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
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const WorkExperience = memo(() => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient (consistent with other pages) */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Work Experience</h1>
          <p className="text-xl text-blue-100">My professional journey and contributions</p>
        </div>

        {/* Timeline container */}
        <div className="relative p-8">
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
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold shadow-md z-10">
                  {index + 1}
                </div>

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    {/* Header with icon and title */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-4xl" role="img" aria-label="company logo">
                        {exp.logo}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Location & period */}
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-2">
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
                    <p className="text-gray-700 mb-3">{exp.description}</p>

                    {/* Achievements (collapsible? but we'll show as list) */}
                    {exp.achievements.length > 0 && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-800 mb-1">Key Achievements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          {exp.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech stack tags */}
                    {exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
});

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;