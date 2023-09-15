import React from "react"

const ButtonCard = ({ text, rounded, onClick }) => {
  return (
    <button
      type="button"
      className={`h-full w-[30px] text-color2 hover:text-color4 ${rounded} hover:bg-color3 hover:shadow-xl`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ButtonCard