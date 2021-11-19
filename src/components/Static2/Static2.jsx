import { React, useEffect, useState } from 'react';
import './style.scss';

const mobile = require('is-mobile');

const Static2 = function () {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile());
  }, []);

  return (
    <div
      className="static2"
      style={{
        backgroundPosition: 'center',
        backgroundImage: 'url("./images/img_third_section_bg.png")',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundSize: 'cover',

      }}
    >
      <p id="desktop-content">Another powerful phrase here as a separation</p>

      <div id="mobile-content">
        <h1 className="about-title">
          <span>C3RTI</span>
          {' '}
          For Music Fans
        </h1>
        <p>
          Discover & empower upcoming artists
          <br />
          {' '}
          before anyone else
        </p>
      </div>

    </div>
  );
};

export default Static2;
