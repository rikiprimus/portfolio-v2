import React from 'react'

import Title from '../components/Typograph/title'
import Button from '../components/Button/Button'

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-[10px] pt-[170px] pb-[180px] md:px-[300px] md:pt-[170px] md:pb-[230px] gap-10">
      <div className='w-full flex flex-col items-center gap-5 md:gap-0 md:w-[700px]'>
        <Title 
          title1='Contact'
          title2='me'
        />
        <p className='text-[13px] md:text-[25px] text-center text-color4 opacity-70'>I'm currently looking for work, if you are interested in hiring me, you can send an email by pressing the button below. Thank you for visiting !</p>
      </div>
      <Button 
        text='Send Email'
        href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=rikiprimus33@gmail.com'
        className='bg-color3'
      />
    </div>
  )
}

export default Contact