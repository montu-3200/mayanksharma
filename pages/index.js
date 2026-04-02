import { useState, useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import Loading from '../components/ui/Loading';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Layout>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}
