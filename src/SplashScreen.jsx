// SplashScreen.jsx
import React from 'react';
import './SplashScreen.css';
import Logo from './assets/logo.svg';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img src={Logo} alt="SkillConnect Logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;