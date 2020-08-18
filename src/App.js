import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <Layout>
      <Hero />
      <div>PROJECTS</div>
      <div>ABOUT</div>
      <div>SKILLS</div>
    </Layout>
  );
};

export default App;
