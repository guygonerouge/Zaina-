import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Leadership',
      skills: [
        { name: 'Team Coordination', level: 95 },
        { name: 'Decision Making', level: 90 },
        { name: 'Conflict Resolution', level: 85 },
      ],
    },
    {
      title: 'Communication',
      skills: [
        { name: 'Public Speaking', level: 90 },
        { name: 'Interpersonal Skills', level: 95 },
        { name: 'Active Listening', level: 85 },
      ],
    },
    {
      title: 'Sports',
      skills: [
        { name: 'Volleyball', level: 95 },
        { name: 'Basketball', level: 80 },
        { name: 'Football', level: 75 },
        { name: 'Badminton', level: 85 },
      ],
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Relationship Building', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Event Organization', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="section-title mb-12 text-center"
            variants={itemVariants}
          >
            Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-xl font-serif mb-6">{category.title}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-foreground/70">{skill.level}%</p>
                      </div>
                      
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;