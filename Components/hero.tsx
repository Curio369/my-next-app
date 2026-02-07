'use client';

import { motion } from 'framer-motion';
import { Rocket, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-space-purple rounded-full filter blur-[100px] opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-space-blue rounded-full filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Rocket className="w-12 h-12 text-space-blue mr-4 animate-float" />
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">
              CURIO
            </h1>
          </div>

          <motion.h2
            className="text-2xl md:text-4xl text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Space Robotics Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Exploring the cosmos from the mountains of IIT Mandi 🏔️
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#projects" className="px-8 py-3 bg-space-blue text-white rounded-full hover:bg-opacity-80 transition-all hover:scale-105 font-semibold">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 glass-morphism text-white rounded-full hover:bg-opacity-20 transition-all hover:scale-105 font-semibold">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-space-blue" />
        </motion.div>
      </div>
    </section>
  );
}