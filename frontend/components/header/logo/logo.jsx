import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo-div-1">
    <div className="logo-div-2">
      <Link to="/" className="logo-anchor">
        <div className="logo-div-3">
          <div className="logo-div-4">
            <img id="logo" src='http://res.cloudinary.com/mwong9968/image/upload/v1509946098/Screen_Shot_2017-11-05_at_21.27.59_xqtv9p.jpg'></img>
          </div>
        </div>
      </Link>
    </div>
  </div>
)

export default Logo;
