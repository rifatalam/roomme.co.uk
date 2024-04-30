import React from 'react';
import logo from './assets/logo.png'
import appleIcon from './assets/apple.png'
import playstore from './assets/play-store.png'
import './App.css';
import './assets/fonts/ComfortaaBold.ttf'
import './assets/fonts/ComfortaaRegular.ttf'
import './assets/fonts/ComfortaaLight.ttf'
import './assets/fonts/ComfortaaMedium.ttf'
import './assets/fonts/ComfortaaSemiBold.ttf'
import { Sandtimer } from './components/lottie/Sandtimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='h1'>
          Coming soon 👀
        </h1>
        <Sandtimer />
        {/* <div className='platforms'>
          <img className='img' src={appleIcon} alt='apple' />
          <img className='img' src={playstore} alt='playstore' />
        </div> */}
      </header>
    </div>
  );
}

export default App;
