import React from 'react';
import '../styles/Header.css';

const Header = () => {

  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header
      style={headerStyle}
    >
      TODOs App
    </header>
  );
}

export default Header