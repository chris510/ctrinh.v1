import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import History from './components/History';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <History></History>
      <Contact></Contact>
    </div>
  );
}

export default App;
