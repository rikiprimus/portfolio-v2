import React from 'react'

const Button = ({ text, onClick, className, href }) => {
  return (
    <a 
      href={href}
      className={`py-4 px-6 text-base rounded-xl hover:bg-color1 hover:shadow hover:shadow-color3 ${className}`}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default Button