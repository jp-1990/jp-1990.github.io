import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <Layout>
      <Hero />
      <main>
        <Projects id='Projects' />
        <About id='About' />
        <Skills id='Skills' />
      </main>
    </Layout>
  );
};

export default App;
