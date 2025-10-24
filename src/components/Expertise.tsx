import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Target,
      title: 'Talent Acquisition Strategy',
      description:
        'Designing efficient hiring processes that align with organizational goals and culture.',
      gradient: 'from-[#E41E26] to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Leadership Development',
      description:
        'Empowering teams and managers through coaching and skills enhancement programs.',
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: Award,
      title: 'Employer Branding',
      description:
        'Building a strong corporate reputation that attracts top talent and retains high performers.',
      gradient: 'from-purple-600 to-indigo-600',
    },
  ];

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E41E26]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E41E26] to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized services that drive organizational success and employee growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26]/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>

              <div className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-3xl p-8 border border-white/20 shadow-xl h-full">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#E41E26] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E41E26] to-pink-600 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
