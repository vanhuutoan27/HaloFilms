import React from 'react';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="Footer" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="content">Copyright &copy; 2023 All Rights Reserved By HaloFilms</div>
    </div>
  );
}

export default Footer;
