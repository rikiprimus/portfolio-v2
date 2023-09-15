import React from 'react'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='w-full bg-color2 flex flex-col items-center py-2 md:py-5'>
      <div className='flex items-center'> 
        <MdCopyright />
        <p className='text-[12px] md:text-[20px]'>Copyright <a href='/' alt='Ricky Primus Saputra' className='hover:font-bold hover:text-color3'>Ricky Primus Saputra</a>. All Rights Reserved</p>
      </div>
      <p className='text-[12px] md:text-[20px]'>Designed by <a href='/' alt='Ricky Primus Saputra' className='hover:font-bold hover:text-color3'>Ricky Primus Saputra</a></p>
    </div>
  )
}

export default Footer