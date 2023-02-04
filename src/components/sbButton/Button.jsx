import React from 'react';
import style from './button.module.scss';

const ButtonVariant = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={[style.button, style[variant]].join(' ')} {...rest}>
      {children}
    </button>
  );
};

export default ButtonVariant;
