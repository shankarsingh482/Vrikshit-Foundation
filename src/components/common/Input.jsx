import React from 'react';

const Input = (props) => {
  const {id, name, type, placeholder, required, value, className} = props;
  return (
    <div>
      <input id={id} name={name} type={type} value={value} className={className} placeholder={placeholder} required={required}  />
    </div>
  )
}

export default Input;
