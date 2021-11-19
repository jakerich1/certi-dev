import { React, useEffect, useState } from 'react';
import './style.scss';

const mobile = require('is-mobile');

const Static1 = function () {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mobile());
  }, []);

  return (
    <div
      className="static1"
      style={{
        backgroundPosition: 'center',
        backgroundImage: 'url("/images/img_first_section_bg@2x.png")',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <p>Another powerful phrase here as a separation</p>
    </div>
  );
};

export default Static1;
