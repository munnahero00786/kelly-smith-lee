import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      period: '2021–Present',
      role: 'Hiring Manager at Coca Cola Bottling USA',
      achievements: [
        'Led strategic recruitment initiatives across multiple departments.',
        'Implemented leadership hiring frameworks to enhance workforce quality.',
        'Improved onboarding satisfaction scores by 30% company-wide.',
      ],
    },
    {
      period: '2017–2021',
      role: 'HR Business Partner – Corporate Division',
      achievements: [
        'Managed recruitment for over 200 mid-level corporate positions.',
        'Collaborated with leadership teams to align HR strategy with business growth.',
        'Championed diversity and inclusion programs across departments.',
      ],
    },
    {
      period: '2014–2017',
      role: 'Talent Acquisition Specialist',
      achievements: [
        'Developed innovative hiring campaigns for new graduates.',
        'Optimized recruitment pipelines through HR digital tools.',
        'Built strong candidate experience strategies.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26]/5 via-transparent to-purple-500/5"></div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Career Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E41E26] to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E41E26] via-pink-500 to-purple-500"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="flex items-start gap-4 md:gap-8">
                <div
                  className={`flex-shrink-0 ${
                    index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'
                  }`}
                >
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E41E26] to-pink-600 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className={`flex-1 backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-6 border border-white/20 shadow-xl ${
                    index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-block px-4 py-1 rounded-full bg-[#E41E26]/10 border border-[#E41E26]/30 mb-3">
                    <span className="text-sm font-semibold text-[#E41E26]">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {item.role}
                  </h3>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="text-[#E41E26] flex-shrink-0 mt-1" size={18} />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
