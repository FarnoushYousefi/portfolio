import React from 'react';
import Typed from 'react-typed';
import './header.css'
function Header() {
  return (
    <div className='mainInfo'>
      <h1>What am I</h1>
      <Typed
        strings={[
          ' ',
          ' A Software Engineer',
          'Also known as an',
          'Front-end developer',
          'Back-end developer',
          "Full stack developer",
          "Or",
          '"a coder"',
          " ",
          " "
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
}

export default Header;
