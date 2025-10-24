import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Heart, label: 'Integrity', color: '#E41E26' },
    { icon: Users, label: 'Diversity & Inclusion', color: '#E41E26' },
    { icon: Target, label: 'Empowerment', color: '#E41E26' },
    { icon: Award, label: 'Opportunity Creation', color: '#E41E26' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E41E26]/5 to-transparent"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E41E26] to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26] to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <motion.div
              className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-3xl p-4 border border-white/20 shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/image.png"
                alt="Kelly Smith Lee - Professional HR Leader"
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E41E26]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-3xl p-8 border border-white/20 shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With years of experience in human resources and recruitment, I'm passionate about
                helping people grow, build meaningful careers, and connect with the right opportunities.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                At Coca Cola Bottling USA, I lead hiring initiatives that prioritize inclusion,
                integrity, and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E41E26] to-pink-500 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#E41E26] transition-colors">
                  {value.label}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
