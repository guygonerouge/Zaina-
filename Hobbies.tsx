import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Globe, UtensilsCrossed, SwissFranc as Swim, Plane, Music } from 'lucide-react';

const Hobbies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const hobbies = [
    {
      title: 'Public Speaking & Debates',
      description: 'Passionate about articulating ideas and engaging in thoughtful discussions.',
      icon: <Mic size={24} />,
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      title: 'Networking & Community Building',
      description: 'Enjoy connecting people and fostering meaningful communities.',
      icon: <Globe size={24} />,
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Cooking as Therapy',
      description: 'Find peace and creativity in the kitchen, exploring new recipes.',
      icon: <UtensilsCrossed size={24} />,
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      title: 'Swimming for Fitness',
      description: 'Maintain physical health and mental clarity through regular swimming.',
      icon: <Swim size={24} />,
      color: 'bg-cyan-500/10',
      iconColor: 'text-cyan-500',
    },
    {
      title: 'Travel Exploration',
      description: 'Enthusiastic about discovering new places and experiencing different cultures.',
      icon: <Plane size={24} />,
      color: 'bg-amber-500/10',
      iconColor: 'text-amber-500',
    },
    {
      title: 'Singing as Passion',
      description: 'Express emotions and find joy through music and singing.',
      icon: <Music size={24} />,
      color: 'bg-red-500/10',
      iconColor: 'text-red-500',
    },
  ];

  return (
    <section id="hobbies" className="py-20">
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
            Hobbies & Interests
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full ${hobby.color} ${hobby.iconColor} mb-4`}>
                    {hobby.icon}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2">{hobby.title}</h3>
                  <p className="text-foreground/70">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;