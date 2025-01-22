import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Colan Infotech Pvt Ltd',
      position: 'Software Engineer',
      period: 'May 2024 – Present',
      color: 'from-blue-500 to-indigo-500',
      responsibilities: [
        'Spearheaded the development of high-performance web applications using React.js and modern libraries, enhancing user experience.',
        'Migrated legacy codebases to modern JavaScript (ES6+), improving maintainability and readability.',
        'Collaborated closely with design teams to deliver responsive and accessible UI/UX features, adhering to WCAG standards.',
        'Improved scalability and performance through component-based architecture, lazy loading, and tree-shaking techniques.',
        'Conducted thorough code reviews, ensuring adherence to best practices and robust, scalable architecture.',
      ],
    },
    {
      company: 'Osiz Technologies Pvt Ltd',
      position: 'Programmer',
      period: 'Aug 2021 – Mar 2024',
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Designed and developed single-page applications using React.js, significantly enhancing user engagement.',
        'Implemented efficient state management using Redux and Context API, improving application responsiveness.',
        'Collaborated with backend teams to integrate RESTful APIs, ensuring smooth data exchange.',
        'Reduced application load times by optimizing performance through lazy loading and code refactoring.',
        'Built reusable React components to accelerate development timelines and improve maintainability.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6">
                      <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} shadow-lg`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className="relative p-8 bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color}`}>
                              <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                {exp.position}
                              </h3>
                              <p className="text-blue-400">{exp.company}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-6 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>

                          <ul className="space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                                className="flex items-start gap-3 text-gray-300 group/item"
                              >
                                <ArrowRight className="w-4 h-4 mt-1.5 text-blue-400 group-hover/item:translate-x-1 transition-transform" />
                                <span className="text-sm">{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;