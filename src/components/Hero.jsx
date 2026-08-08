import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hello-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          👋 Hello, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Astha Kumari
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Full-Stack Developer | AI Enthusiast | Problem Solver
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          I build scalable, user-friendly, and AI-powered web applications
          that solve real-world problems and create meaningful impact.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <a href="#projects" className="primary-btn">
            View Projects
            <ArrowRight size={18} />
          </a>

          <button className="secondary-btn">
            Download Resume
            <Download size={18} />
          </button>

          <a href="#contact" className="icon-btn">
            <Mail size={19} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-glow"></div>

        <img
          src={profile}
          alt="Astha Kumari"
          className="profile-image"
        />
      </motion.div>
    </section>
  );
}

export default Hero;