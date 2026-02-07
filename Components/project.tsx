'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Mars Rover Simulation',
    description: 'Developed an autonomous navigation system for a simulated Mars rover using ROS and Gazebo. Implemented path planning algorithms and obstacle avoidance.',
    tech: ['ROS', 'Python', 'Gazebo', 'Computer Vision'],
    gradient: 'from-space-blue to-space-purple',
  },
  {
    title: 'Satellite Tracking System',
    description: 'Built a real-time satellite tracking application with orbital prediction capabilities. Visualizes satellite positions and calculates pass times.',
    tech: ['Python', 'Orbital Mechanics', 'TLE Data', 'React'],
    gradient: 'from-space-purple to-space-pink',
  },
  {
    title: 'Robotic Arm Controller',
    description: 'Designed and programmed a 6-DOF robotic arm with inverse kinematics. Integrated computer vision for object detection and pick-and-place operations.',
    tech: ['C++', 'Arduino', 'OpenCV', 'Kinematics'],
    gradient: 'from-space-pink to-space-blue',
  },
  {
    title: 'Autonomous Drone Navigation',
    description: 'Created a drone navigation system using SLAM and path planning algorithms. Achieved autonomous flight in GPS-denied environments.',
    tech: ['ROS', 'SLAM', 'Python', 'PX4'],
    gradient: 'from-space-blue to-space-pink',
  },
  {
    title: 'Space Debris Detection',
    description: 'ML-based system for detecting and classifying space debris from telescope images. Implemented using deep learning and image processing.',
    tech: ['TensorFlow', 'Python', 'Computer Vision', 'CNN'],
    gradient: 'from-space-purple to-space-blue',
  },
  {
    title: 'Lunar Lander Simulator',
    description: 'Physics-based lunar landing simulator with realistic rocket dynamics. Implemented PID control for stable landing.',
    tech: ['Unity', 'C#', 'Physics Simulation', 'Control Systems'],
    gradient: 'from-space-pink to-space-purple',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 gradient-text text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-morphism rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-space-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-space-darker rounded-full text-xs text-space-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-space-blue hover:text-space-purple transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-space-blue hover:text-space-purple transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}