import React from 'react';
import Header from './components/header';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Home from './pages/home'

const App = () => {
  return (
    <div className="App">
      <Header />
       <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;