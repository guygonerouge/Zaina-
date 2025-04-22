import React from 'react';
import Layout from './layout/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Layout>
      <ParticleBackground />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Hobbies />
      <Contact />
    </Layout>
  );
}

export default App;