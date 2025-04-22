import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, MessageSquare, Mic } from 'lucide-react';

const Achievements: React.FC = () => {
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

  const achievements = [
    {
      title: 'Sports Leadership',
      items: [
        'Captained and won volleyball tournament held by Holy Family Convent Sr Sec School',
        'Playing six players of JLU\'s volleyball team',
        'Participated in inter-school basketball tournaments for consecutive two years',
        'CLASS representative every alternative year(as per the rule)',
      ],
      icon: <Users size={24} />,
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Debate & Public Speaking',
      items: [
        'Winner of Debate competition Organized by Bhopal school of social sciences (Affiliated with Barkatullah University, Bhopal)',
        'Best delegate award in The Concordia Summit',
        'Best delegate award in Catalyst MUN',
        'High commendation in Metanoia International MUN 2.0',
        'Attended workshop of Public Speaking and MUNs',
      ],
      icon: <MessageSquare size={24} />,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Leadership Roles',
      items: [
        'Team lead of 100+ on a school trip to Nainital',
        'Core member of Sakham Sakhar India',
        'Volunteered with SRM group of institutions',
      ],
      icon: <Award size={24} />,
      color: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Media & Communication',
      items: [
        'Done anchoring in various annual functions and events',
        'Participated in painting competition held by 94.3 MY FM',
      ],
      icon: <Mic size={24} />,
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-primary/5">
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
            Achievements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card overflow-hidden"
              >
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${achievement.color}`}></div>
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif mb-4">{achievement.title}</h3>
                    
                    <ul className="space-y-2">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
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

export default Achievements;