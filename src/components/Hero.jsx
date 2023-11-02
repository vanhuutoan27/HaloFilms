import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Hero">
      <div className="hero_banner">
        <div className="hero_header">
          <h2 style={{ color: theme.color10, fontSize: '80px' }}>HaloFilms</h2>
          <h3 style={{ color: '#ddd' }}>
            Experience captivating narratives <br />
            and the seamless fusion of art and cinematography!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
