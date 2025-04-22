import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email',
      value: 'zaina.lodi24@iimb.ac.in',
      link: 'mailto:zaina.lodi24@iimb.ac.in',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone',
      value: '+91 9893094336',
      link: 'tel:+919893094336',
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Location',
      value: 'Bhopal, M.P., India',
      link: null,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // This is where you'd typically send the form data to your backend
    // For demonstration, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form status after a few seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-primary/5">
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
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="card text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {info.icon}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                  
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-secondary hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="card"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-serif mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 dark:bg-slate-800/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 dark:bg-slate-800/50"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 dark:bg-slate-800/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 dark:bg-slate-800/50 resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'idle' && (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
                
                {formStatus === 'submitting' && (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                )}
                
                {formStatus === 'success' && (
                  <span className="flex items-center gap-2 text-success">
                    <CheckCircle size={16} />
                    Message Sent!
                  </span>
                )}
                
                {formStatus === 'error' && (
                  <span className="flex items-center gap-2 text-error">
                    <XCircle size={16} />
                    Failed to Send
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;