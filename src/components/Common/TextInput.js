import React from 'react';

const TextInput = ({ name, label, value, onChange, error }) => {
  return (
    <div className='form__control'>
      <label htmlFor={name} className='form__label'>
        {label}
      </label>
      <input
        className='form__input'
        type='text'
        value={value}
        name={name}
        placeholder='Enter text...'
        onChange={onChange}
      />
      {error && <p className='form__error'>{error}</p>}
    </div>
  );
};

export default TextInput;
