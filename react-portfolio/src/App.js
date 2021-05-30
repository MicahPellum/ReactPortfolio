import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div class="content">
        <Header />
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;