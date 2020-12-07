import React, { Component } from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TODO List</h1>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  fontSize: '150%',
};

export default Header;
