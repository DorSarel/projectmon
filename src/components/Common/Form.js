import React from 'react';
import './style.scss';

const Form = ({ children, onSubmit }) => {
  return (
    <form className='form form-grid' onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
