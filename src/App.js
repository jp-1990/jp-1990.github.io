import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <div>ABOUT</div>
      <div>SKILLS</div>
    </Layout>
  );
};

export default App;
