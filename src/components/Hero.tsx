import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26]/20 via-transparent to-black/30 dark:from-[#E41E26]/30 dark:to-black/50"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E41E26]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E41E26]/10 border border-[#E41E26]/30 mb-6 backdrop-blur-lg"
            >
              <Sparkles size={16} className="text-[#E41E26]" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Hiring Manager at Coca Cola Bottling USA
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#E41E26] to-gray-900 dark:from-white dark:via-[#E41E26] dark:to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Kelly Smith Lee
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connecting people with opportunities, building careers with impact.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-[#E41E26] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect with Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.a
                href="#about"
                className="px-8 py-4 backdrop-blur-lg bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-white/50 hover:border-[#E41E26] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26] to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <motion.div
                className="relative backdrop-blur-xl bg-white/10 dark:bg-black/20 rounded-3xl p-4 border border-white/20 shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/image.png"
                  alt="Kelly Smith Lee - Hiring Manager at Coca Cola Bottling USA"
                  className="rounded-2xl w-full h-auto object-cover shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-600 dark:text-gray-400"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-[#E41E26] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
