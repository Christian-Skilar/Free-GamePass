import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h1>Game Pass</h1>
        <h2>A collection of free to play games</h2>
        <div className='border-top' />
        <a href="#search-form" class="corner-button">Explore Games</a>
      </div>
    </div>
  )
}

export default Header




