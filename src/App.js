import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './Components/Footer/footer';
import bubbles_bg from './Media/blue_bubbles_background.jpg'

function Header() {
  const [str, changeText] = useState(() => {return 'Hello'});
  const [clicked, changeClicked] = useState('white');
  function changeButton() {
    if (str === 'Hello') changeText('Clicked');
    else changeText('Hello');
  }

  function click() {
    if (clicked === 'white') changeClicked('blue');
    else changeClicked('white');
  }

  return (
    <div className='Header'>
      <button className='Home-button' onClick={() => changeButton()}>{str}</button>
      <button className='About-button' onClick={() => click()} style={{color: clicked}}>Color Change</button>
    </div>
  );
}

function App() {
  return (
    <div className='bg'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer/>
    </ div >
  );
}

export default App;
