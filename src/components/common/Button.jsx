import React from 'react';

const Button = (props) => {
  const {type, name, value, className} = props;
  return (
    <div>
      <button type={type} name={name} className={className}>
        {value}
      </button>
    </div>
  )
}

export default Button;
