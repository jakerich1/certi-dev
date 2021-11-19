/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import './style.scss';

const AppView = function () {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const root = document.querySelector('#root');
    const appViewEl = document.querySelector('#app-view');

    function updatePosition() {
      // This is the percentage from the top app view to the point where position sticky fails
      const percentToUnstick = (root.scrollTop - appViewEl.offsetTop)
      / (appViewEl.offsetHeight - window.innerHeight);

      if (percentToUnstick <= 0.3333) {
        setImageIndex(1);
      }

      if (percentToUnstick > 0.3333 && percentToUnstick <= 0.6666) {
        setImageIndex(2);
      }

      if (percentToUnstick > 0.6666) {
        setImageIndex(3);
      }
    }

    root.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => root.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <div id="app-view">
      <div className="sticky-cont">
        <div id="image-scroll">
          <img alt="phone template" src="./images/appview/img_phone.png" />
          <img style={{ filter: imageIndex === 1 ? 'opacity(1)' : 'opacity(0)' }} className="phone-inner" alt="app view 1" src="./images/appview/img_firstscreen.png" />
          <img style={{ filter: imageIndex === 2 ? 'opacity(1)' : 'opacity(0)' }} className="phone-inner" alt="app view 2" src="./images/appview/img_secondscreen.png" />
          <img style={{ filter: imageIndex === 3 ? 'opacity(1)' : 'opacity(0)' }} className="phone-inner" alt="app view 3" src="./images/appview/img_thirdscreen.png" />
        </div>
        <div className="app-detail">
          <div className="ad-title">
            <span>C3RTI</span>
            , the first social music app!
          </div>
          <div className="ad-content">C3RTI is the new social streaming built exclusively for independent artists and music fans.</div>
          <div className="ad-content">Share your music, grow an army of superfans, and interact directly with them. Take full control of your career without compromise, monetize your music and keep 100% of your masters rights.</div>
        </div>
      </div>
    </div>
  );
};

export default AppView;
