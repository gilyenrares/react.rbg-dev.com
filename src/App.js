import React from 'react';
import './App.css';
import Home from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/sections/Navigation';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;