import React from 'react'
import Button from '../Button/Buttonslider'

const workCard = ({ image, button1, button2, target }) => {
  return (
    <div className="relative flex flex-col items-center h-[180px] w-[290px] md:h-[280px] md:w-[475px] rounded-2xl bg-color2 gap-4 overflow-hidden">
      <img src={image} alt="Logo-ReactJS" className="w-full h-full"/>
      <div 
        className='absolute bottom-4 w-full h-full flex justify-center items-end mt-[20px] gap-4 transform hover:scale-105 transition-transform duration-200 opacity-0 hover:opacity-100'
      >
        <Button 
          text='Details'
          className='bg-color3'
          href={button1}
        />
        <Button 
          text='Demo'
          className='bg-color2'
          href={button2}
        />
      </div>
    </div>
  )
}

export default workCard