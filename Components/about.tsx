'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Satellite, GraduationCap } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 gradient-text text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I&apos;m <span className="text-space-blue font-semibold">Curio</span>,
              a passionate explorer at the intersection of space technology and robotics.
              Currently pursuing my dreams at <span className="text-space-purple font-semibold">IIT Mandi</span>,
              nestled in the beautiful Himalayas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My fascination with <span className="text-space-pink font-semibold">Space Robotics</span> drives
              me to constantly learn, experiment, and push boundaries. From autonomous systems to
              satellite technology, I&apos;m on a mission to contribute to humanity&apos;s journey among the stars.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I&apos;m not coding or building robots, you can find me stargazing in the mountains,
              pondering about Mars colonies, or discussing the latest SpaceX launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="glass-morphism p-6 rounded-2xl hover:bg-opacity-10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <GraduationCap className="w-12 h-12 text-space-blue mb-4" />
              <h3 className="text-2xl font-bold mb-2">Education</h3>
              <p className="text-gray-400">IIT Mandi</p>
              <p className="text-gray-500 text-sm">Himachal Pradesh, India</p>
            </motion.div>

            <motion.div
              className="glass-morphism p-6 rounded-2xl hover:bg-opacity-10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Satellite className="w-12 h-12 text-space-purple mb-4" />
              <h3 className="text-2xl font-bold mb-2">Passion</h3>
              <p className="text-gray-400">Space Robotics</p>
              <p className="text-gray-500 text-sm">Autonomous Systems & Exploration</p>
            </motion.div>

            <motion.div
              className="glass-morphism p-6 rounded-2xl hover:bg-opacity-10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Mountain className="w-12 h-12 text-space-pink mb-4" />
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-gray-400">The Himalayas</p>
              <p className="text-gray-500 text-sm">Where mountains meet the stars</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}