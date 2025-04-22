import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: '#', label: 'Github' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary/10 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <motion.p 
              className="text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} Zaina Lodi. All rights reserved.
            </motion.p>
          </div>
          
          <motion.div 
            className="flex space-x-4 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-foreground/70 hover:text-secondary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-xs flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Made with <Heart size={14} className="text-error animate-pulse" /> in Bhopal, India
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;