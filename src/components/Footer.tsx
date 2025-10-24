import { motion } from 'framer-motion';
import { Heart, Linkedin, Twitter, Music, MessageCircle } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kelly-smith-lee', label: 'LinkedIn' },
    { icon: Music, href: 'https://www.tiktok.com/@kellyann2025', label: 'TikTok' },
    { icon: Twitter, href: 'https://twitter.com/kellysmithlee', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://wa.me/12055308680', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E41E26]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-[#E41E26] bg-clip-text text-transparent">
              Kelly Smith Lee
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Building Careers with Impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#E41E26] transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E41E26] flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2025 Kelly Smith Lee. Crafted with <Heart className="inline w-4 h-4 text-[#E41E26] fill-current" /> using React & TailwindCSS
            </motion.p>
            <motion.p
              className="text-gray-500 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Hiring Manager at Coca Cola Bottling USA
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
