'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent! (Add your backend logic here)');
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-20" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 gradient-text text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Interested in collaborating on space robotics projects? Want to discuss the latest Mars mission? 
              Or just want to say hi? Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-300 hover:text-space-blue transition-colors">
                <Mail className="w-6 h-6" />
                <span>curio@iitmandi.ac.in</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Curio369" target="_blank" rel="noopener noreferrer" 
                 className="glass-morphism p-3 rounded-full hover:bg-space-blue transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="glass-morphism p-3 rounded-full hover:bg-space-blue transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="glass-morphism p-3 rounded-full hover:bg-space-blue transition-all hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-space-blue bg-transparent text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-space-blue bg-transparent text-white"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 glass-morphism rounded-lg focus:outline-none focus:ring-2 focus:ring-space-blue bg-transparent text-white resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-space-blue text-white rounded-lg hover:bg-opacity-80 transition-all hover:scale-105 font-semibold flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center text-gray-500"
        >
          <p>Made with 💙 by Curio from the mountains of IIT Mandi</p>
          <p className="text-sm mt-2">Reaching for the stars, one line of code at a time 🚀</p>
        </motion.div>
      </div>
    </section>
  );
}