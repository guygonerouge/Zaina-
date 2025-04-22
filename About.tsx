import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            About Me
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              variants={itemVariants}
            >
              <p className="text-lg leading-relaxed mb-6">
                I am a passionate, approachable individual who thrives on connecting with people and fostering meaningful interactions. With strong leadership abilities, I inspire trust and openness while embracing challenges with determination.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                As a sports enthusiast, especially in volleyball, I embrace challenges with determination and am recognized for my exceptional organizational skills and ability to maintain relationships.
              </p>
              <p className="text-lg leading-relaxed">
                My diverse background in business administration and English literature provides me with a unique perspective, allowing me to excel in both analytical thinking and creative expression.
              </p>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              variants={itemVariants}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden bg-gradient-to-tr from-primary/20 to-secondary/20 h-80 flex items-center justify-center">
                  <p className="text-xl font-serif italic text-center px-8">
                    "I seek opportunities to grow and make an impact."
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full z-0"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;