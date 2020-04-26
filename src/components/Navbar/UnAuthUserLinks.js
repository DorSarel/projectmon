import React from 'react';
import { Link } from 'react-router-dom';

const UnAuthUserLinks = () => (
  <>
    <li className='nav__item'>
      <Link to='/' className='nav__link'>
        Sign in
      </Link>
    </li>
    <li className='nav__item'>
      <Link to='/' className='nav__link'>
        Sign up
      </Link>
    </li>
  </>
);

export default UnAuthUserLinks;
