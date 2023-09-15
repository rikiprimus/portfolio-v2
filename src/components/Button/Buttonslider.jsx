import React from 'react'

const Button = ({ text, onClick, className, href }) => {
  return (
    <a 
      href={href}
      className={`py-2 px-4 hover:py-3 hover:px-5 text-base rounded-xl hover:bg-color1 hover:shadow hover:shadow-color1 ${className}`}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default Button