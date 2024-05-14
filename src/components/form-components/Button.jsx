import React from 'react'

const Button = ({ id, className, onClick, children, type = "button", }) => {
  return <button id={id} className={className + " btn"} onClick={onClick} type={type} > {children} </button>
};

export default Button