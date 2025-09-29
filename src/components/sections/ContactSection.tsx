'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-white"
        >
          Mari Terhubung
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-8 text-gray-400"
        >
          Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya!
        </motion.p>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          href="mailto:fahmyrosyadi29@gmail.com"
          className="inline-block px-8 py-4 mb-12 font-semibold text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-500"
        >
          Kirim Email
        </motion.a>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com/rsydfhmy03" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/mitahudev03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
            <Linkedin size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;