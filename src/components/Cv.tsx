import { motion } from 'framer-motion';
import { Mail, Globe, Phone, MapPin, Linkedin, ExternalLink, Github, Download } from 'lucide-react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { QRCodeCanvas } from 'qrcode.react';

function Cv() {
  const cvRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!cvRef.current) return;

    const button = document.querySelector('.download-button');
    if (button) {
      (button as HTMLElement).style.display = 'none';
    }

    try {
      const element = cvRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#0a0a0f',
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: imgHeight > imgWidth ? 'portrait' : 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      pdf.save('Muhammad_Shafiq_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      if (button) {
        (button as HTMLElement).style.display = 'flex';
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 overflow-x-hidden">
      <motion.button
        onClick={downloadPDF}
        className="download-button fixed top-6 right-6 z-50 glass-card px-6 py-3 rounded-xl flex items-center gap-2 text-cyan-400 font-semibold hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105 border-cyan-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-5 h-5" />
        Download PDF
      </motion.button>

      <motion.div
        ref={cvRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="flex flex-col md:flex-row items-center gap-8 mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                <img
                  src="/shafiq.png"
                  alt="Muhammad Shafiq"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500/30 relative z-10 shadow-2xl shadow-cyan-500/20"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  MUHAMMAD SHAFIQ
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-cyan-400 font-semibold mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Agentic AI Engineer | Web3 Developer | Jamstack Architect
                </motion.p>
                <motion.p
                  className="text-slate-400 text-sm md:text-base italic"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Building the next generation of autonomous AI and Web3 systems.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-300"
            >
              <a href="mailto:shafiq00786@hotmail.com" className="contact-link">
                <Mail className="w-4 h-4" />
                shafiq00786@hotmail.com
              </a>
              <a href="https://muhammad-shafiq00786.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
              <a href="tel:+923316004786" className="contact-link">
                <Phone className="w-4 h-4" />
                +92 331 6004786
              </a>
              <span className="contact-link">
                <MapPin className="w-4 h-4" />
                Rawalpindi, Pakistan
              </span>
              <a href="https://linkedin.com/in/muhammad-shafiq-jamstack-architect-web3-metaverse-developer-generative-ai" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
            <h2 className="section-title">Professional Summary</h2>
            <p className="text-slate-300 leading-relaxed">
              Agentic AI Engineer & Web3 Developer, currently pursuing a BS in Computer Science at the University of the People.
              Specialized in building intelligent multi-agent systems, decentralized applications, and scalable digital ecosystems integrating Agentic AI, Web3, and modern full-stack technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 hover-lift">
            <h2 className="section-title">Objective</h2>
            <p className="text-slate-300 leading-relaxed">
              Advance as a leading Agentic AI Engineer, merging autonomous AI systems and decentralized technologies to create intelligent, sustainable, and scalable digital futures.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Professional Experience</h2>

          <div className="space-y-6">
            <div className="experience-item">
              <h3 className="text-xl font-bold text-white mb-1">Agentic AI Engineer</h3>
              <p className="text-cyan-400 text-sm mb-3">2023 – Present</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Designed AI-powered multi-agent workflows for automation and personalization</li>
                <li>Integrated OpenAI Agent SDK and Anthropic MCP for modular orchestration</li>
                <li>Built resilient AI systems with human-in-the-loop feedback cycles</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="text-xl font-bold text-white mb-1">Web3 & Full-Stack Developer</h3>
              <p className="text-cyan-400 text-sm mb-3">2021 – 2023</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Developed decentralized applications and Jamstack SaaS platforms</li>
                <li>Built NFT marketplaces, DeFi dashboards, and smart contract integrations</li>
                <li>Optimized performance and developer experience through scalable architectures</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3 className="text-xl font-bold text-white mb-1">Entrepreneur / Business Technologist</h3>
              <p className="text-cyan-400 text-sm mb-3">2017 – 2019</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Led digital transformation projects bridging tech and business strategy</li>
                <li>Balanced innovation with operational scalability and market adaptability</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['OpenAI Agent SDK', 'Anthropic MCP', 'LangGraph', 'Crew AI', 'LangChain', 'TensorFlow', 'PyTorch', 'FastAPI'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Web3 & Blockchain</h3>
              <div className="flex flex-wrap gap-2">
                {['Ethereum', 'Solidity', 'Smart Contracts', 'Web3.js', 'ethers.js', 'IPFS', 'Hardhat', 'NFT', 'DAO'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Full-Stack Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Immersive Tech</h3>
              <div className="flex flex-wrap gap-2">
                {['WebXR', 'Unity', 'Unreal Engine', '3D Metaverse'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Key Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">AI Agent Hub</h3>
              <p className="text-slate-300 text-sm">Multi-agent orchestration using OpenAI Agent SDK + Anthropic MCP</p>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">DeFi Dashboard</h3>
              <p className="text-slate-300 text-sm">Real-time Ethereum analytics dashboard</p>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">NFT Marketplace</h3>
              <p className="text-slate-300 text-sm">Decentralized platform for minting & auctions</p>
            </div>

            <div className="project-card">
              <h3 className="text-lg font-bold text-white mb-2">Metaverse Experience</h3>
              <p className="text-slate-300 text-sm">Immersive WebXR space with AI NPCs & wallet integration</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-6 mt-6 hover-lift">
          <h2 className="section-title">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1">Bachelor of Science (in progress)</h3>
            <p className="text-cyan-400 mb-3">University of the People</p>
            <p className="text-slate-300 text-sm font-semibold mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {['Generative AI', 'Agentic AI Systems', 'Machine Learning', 'Data Analytics', 'Human-Centered AI'].map(course => (
                <span key={course} className="skill-tag">{course}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card rounded-2xl p-6 mt-6 text-center hover-lift"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <a href="https://muhammad-shafiq00786.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <ExternalLink className="w-4 h-4" />
                Visit Portfolio
              </a>
              <a href="https://github.com/Shafiqmuhammad" target="_blank" rel="noopener noreferrer" className="contact-link">
                <Github className="w-4 h-4" />
                GitHub Profile
              </a>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/5">
              <QRCodeCanvas
                value="https://muhammad-shafiq00786.vercel.app/"
                size={120}
                bgColor="transparent"
                fgColor="#22d3ee"
                className="rounded-lg"
              />
              <p className="text-xs text-slate-400 mt-2">Scan to view portfolio</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-slate-500 text-sm"
        >
          <p>© 2025 Muhammad Shafiq. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cv;
