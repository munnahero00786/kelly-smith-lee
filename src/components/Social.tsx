import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Linkedin, Twitter, Music } from 'lucide-react';

export default function Social() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    {
      platform: 'TikTok',
      handle: '@kellyann2025',
      url: 'https://www.tiktok.com/@kellyann2025',
      icon: Music,
      color: '#000000',
      gradient: 'from-black to-gray-800',
    },
    {
      platform: 'WhatsApp',
      handle: '+1 (205) 530-8680',
      url: 'https://wa.me/12055308680',
      icon: MessageCircle,
      color: '#25D366',
      gradient: 'from-green-500 to-green-600',
    },
    {
      platform: 'LinkedIn',
      handle: 'Kelly Smith Lee',
      url: 'https://www.linkedin.com/in/kelly-smith-lee',
      icon: Linkedin,
      color: '#0A66C2',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      platform: 'Twitter',
      handle: '@kellysmithlee',
      url: 'https://twitter.com/kellysmithlee',
      icon: Twitter,
      color: '#1DA1F2',
      gradient: 'from-sky-500 to-blue-600',
    },
  ];

  const testimonials = [
    {
      client: 'Jane Doe',
      role: 'HR Partner',
      feedback:
        'Kelly is a visionary HR leader who balances empathy with strategic excellence.',
      avatar: 'JD',
    },
    {
      client: 'Michael Harris',
      role: 'Talent Director',
      feedback:
        'Working with Kelly has been an inspiring experience — her leadership in hiring is unmatched.',
      avatar: 'MH',
    },
  ];

  return (
    <section id="social" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E41E26]/5 to-transparent"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Connect with Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E41E26] to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Let's stay connected across platforms
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>

              <div className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-6 border border-white/20 shadow-xl h-full flex flex-col items-center text-center">
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {social.platform}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{social.handle}</p>

                <motion.div
                  className="mt-4 text-xs font-semibold text-[#E41E26] group-hover:text-pink-600 transition-colors"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to connect →
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What People Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 border border-white/20 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E41E26] to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.client}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
