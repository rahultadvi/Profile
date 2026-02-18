import { memo } from 'react';

// Education data – updated with your information
const EDUCATION_DATA = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Indrashil University',
    location: 'India', // Add specific city if known, e.g., 'Ahmedabad, India'
    period: '2021 – 2025', // Adjust years as needed
    gpa: 'CGPA: 8.5/10', // Update with actual if known
    description:
      'Relevant coursework: Data Structures, Algorithms, Web Development, Database Management, Networking, Cloud Computing.',
    achievements: [
      'Participated in hackathons and coding competitions',
      'Member of University Tech Club',
    ],
    logo: '🏛️', // Emoji placeholder; replace with actual image if available
  },
  {
    id: 2,
    degree: 'High School Diploma',
    institution: 'Jai Ram Krishna Institution English Medium School',
    location: 'Navagam, India',
    period: '2019 – 2021', // Adjust years
    gpa: 'Percentage: 85%', // Update if known
    description:
      'Completed Higher Secondary Education with focus on Science and Computer Science.',
    achievements: [
      'School Topper in Computer Science',
      'Active participant in science exhibitions',
    ],
    logo: '🏫',
  },
];

const Education = memo(() => {
  return (
    <div id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Education</h1>
          <p className="text-xl text-blue-100">My academic journey and qualifications</p>
        </div>

        {/* Education timeline */}
        <div className="p-8">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-purple-600 md:before:mx-auto md:before:left-0 md:before:right-0">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={edu.id} className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-600 text-blue-600 font-bold shadow-md z-10">
                  {index + 1}
                </div>

                {/* Content card */}
                <div className="ml-14 md:ml-0 md:w-5/12 md:even:ml-auto md:odd:mr-auto">
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl" role="img" aria-label="institution logo">
                        {edu.logo}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </div>

                    <p className="text-green-600 font-semibold text-sm mb-2">{edu.gpa}</p>
                    <p className="text-gray-700 mb-3">{edu.description}</p>

                    {edu.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Achievements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {edu.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Education.displayName = 'Education';

export default Education;