import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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

  const educationItems = [
    {
      degree: 'BBA DBE',
      institution: 'Indian Institute of Management (IIM)',
      location: 'Bangalore',
      year: '2023 - Present',
      icon: <BookOpen className="text-primary" />,
    },
    {
      degree: 'BA Honors in English Literature',
      institution: 'Jagran Lake City University',
      location: 'Bhopal',
      year: '2022 - 2023',
      icon: <BookOpen className="text-primary" />,
    },
    {
      degree: '12th Standard',
      institution: "St. Joseph's Convent",
      location: 'Bhopal',
      year: '2022',
      icon: <BookOpen className="text-primary" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-primary/5">
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
            Education
          </motion.h2>
          
          <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 pl-8 space-y-12">
            {educationItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                <div className="absolute -left-14 p-2 bg-white dark:bg-slate-800 rounded-full border-2 border-primary/20">
                  {item.icon}
                </div>
                
                <div className="card hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-serif mb-2">{item.degree}</h3>
                  <p className="text-lg font-medium mb-3">{item.institution}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-foreground/70 gap-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;