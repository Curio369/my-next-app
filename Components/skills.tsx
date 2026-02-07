'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cpu, Workflow, Brain, Wrench, Rocket } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    icon: Code,
    items: ['Python', 'C++', 'JavaScript', 'MATLAB', 'ROS'],
    color: 'text-space-blue',
  },
  {
    category: 'Robotics',
    icon: Cpu,
    items: ['Control Systems', 'Path Planning', 'Sensors & Actuators', 'Kinematics'],
    color: 'text-space-purple',
  },
  {
    category: 'Space Tech',
    icon: Rocket,
    items: ['Satellite Systems', 'Orbital Mechanics', 'Aerospace Engineering'],
    color: 'text-space-pink',
  },
  {
    category: 'AI & ML',
    icon: Brain,
    items: ['Computer Vision', 'Deep Learning', 'Reinforcement Learning'],
    color: 'text-space-blue',
  },
  {
    category: 'Tools',
    icon: Wrench,
    items: ['Git', 'Docker', 'Linux', 'Gazebo', 'SolidWorks'],
    color: 'text-space-purple',
  },
  {
    category: 'Systems',
    icon: Workflow,
    items: ['Embedded Systems', 'Real-time OS', 'Arduino', 'Raspberry Pi'],
    color: 'text-space-pink',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 gradient-text text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="glass-morphism p-6 rounded-2xl hover:bg-opacity-10 transition-all"
              >
                <Icon className={`w-12 h-12 ${skill.color} mb-4`} />
                <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-space-blue rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}