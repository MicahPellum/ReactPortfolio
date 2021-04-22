import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <div>
      <Nav />
      <main>
       <About />
    <Portfolio />
    <Contact />
    <Resume />
        
      </main>

    </div>
  );
}

export default App;