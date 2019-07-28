import React from 'react';

const Input = (props) => {
  const {id, name, type, placeholder, required, value, className, changeHandler} = props;
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        required={required}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Input;
