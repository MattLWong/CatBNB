import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => (
  <ul className='footer-ul'>
    <li className='footer-li f-h'>
      <Link className='footer-a'
        to='/'
        >
        Home
      </Link>
    </li>
    <li className='footer-li f-h'>
      <Link className='footer-a'
        to="/search?lat=37.7749295&lng=-122.41941">
        Search
      </Link>
    </li>
    <li className='footer-li'>
      <a className='footer-a'>
        © 2017
      </a>
    </li>
    <li className='footer-li f-h'>
      <a className='footer-a'
        href="https://github.com/MattLWong">
        Github
      </a>
    </li>
    <li className='footer-li f-h'>
      <a className='footer-a'
        href="https://www.linkedin.com/in/matt-wong-872b2549/">
        Info
      </a>
    </li>
  </ul>
)

export default Footer;
