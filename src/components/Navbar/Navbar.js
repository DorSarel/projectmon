import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Navbar = () => {
  return (
    <nav className='nav-grid nav'>
      <Link to='/' className='nav__brand'>
        Projectmon
      </Link>
      <ul className='nav__list'>
        <li className='nav__item'>
          {/* <Link to='/' className='nav__link'>
            Sign in
          </Link>
          <Link to='/' className='nav__link'>
            Sign up
          </Link> */}
          <Link to='/' className='nav__link'>
            Projects
          </Link>
          <Link to='/' className='nav__link'>
            New Project
          </Link>
          <Link to='/' className='nav__link'>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
