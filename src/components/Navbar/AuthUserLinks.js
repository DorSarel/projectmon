import React from 'react';
import { Link } from 'react-router-dom';

const AuthUserLinks = () => (
  <>
    <li className='nav__item'>
      <Link to='/' className='nav__link'>
        Projects
      </Link>
    </li>
    <li className='nav__item'>
      <Link to='/' className='nav__link'>
        New Project
      </Link>
    </li>
    <li className='nav__item'>
      <Link to='/' className='nav__link'>
        Log out
      </Link>
    </li>
  </>
);

export default AuthUserLinks;
