import React from 'react';
import { Link } from 'react-router-dom';
import UnAuthUserLinks from './UnAuthUserLinks';
import AuthUserLinks from './AuthUserLinks';

import './style.scss';

const Navbar = ({ isAuthenticated = true }) => {
  return (
    <nav className='nav-grid nav'>
      <Link to='/' className='nav__brand'>
        Projectmon
      </Link>
      <ul className='nav__list'>
        {isAuthenticated ? <AuthUserLinks /> : <UnAuthUserLinks />}
      </ul>
    </nav>
  );
};

export default Navbar;
