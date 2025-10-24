import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E41E26]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect Professionally
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E41E26] to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Ready to discuss opportunities or collaborations? Reach out today!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <motion.div
                className="flex items-start gap-4 mb-6"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E41E26] to-pink-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Atlanta, Georgia, USA</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:kellysmithlee@cocacolabottlingusa.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-[#E41E26] transition-colors"
                  >
                    kellysmithlee@cocacolabottlingusa.com
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="backdrop-blur-xl bg-gradient-to-br from-[#E41E26]/20 to-pink-600/20 rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-800 dark:text-gray-200 text-lg italic">
                "Building careers with impact starts with a conversation. Let's connect and explore
                how we can work together."
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 focus:border-[#E41E26] focus:ring-2 focus:ring-[#E41E26]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 focus:border-[#E41E26] focus:ring-2 focus:ring-[#E41E26]/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 focus:border-[#E41E26] focus:ring-2 focus:ring-[#E41E26]/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#E41E26] to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-green-600 dark:text-green-400 font-semibold"
                >
                  Thank you for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
