import { MdFileDownload } from "react-icons/md";
import Device from '../assets/Device.svg'


const Hero = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-[10px] pt-[150px] pb-[50px] lg:px-[200px] lg:py-[100px]'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='leading-[3rem] md:leading-[5rem] tracking-light font-poppins font-bold text-[60px] md:text-[6rem]'>FRONT-END</h1>
          <h1 className='leading-[3rem] md:leading-[5rem] font-bold text-[60px] md:text-[6rem] uppercase text-color3'>Web dev</h1>
        </div>
        <div className='flex gap-8'>
          <a 
            href='#contact' 
            alt='Hire me' 
            className='bg-color3 font-bold text-[15px] px-6 py-2 md:text-[20px] md:px-10 md:py-2 rounded-full shadow-2xl hover:shadow-color3'>Hire me</a>
          <a 
            href='https://drive.usercontent.google.com/download?id=1HcHt5t3929_XMD89O934ozpKoGBhJVlU&export=download&authuser=1&confirm=t&uuid=982dcede-80da-49f7-a235-bf94ec110dbf&at=APZUnTV0SYrvVIvmEJszIm2p8aLK:1694529643028' 
            alt='Download CV' 
            className='flex items-center gap-2 bg-color2 font-bold text-[15px] px-6 md:text-[20px] md:px-10 md:py-2 rounded-full shadow-2xl hover:shadow-color2'>Download CV <MdFileDownload size={30}/></a>
        </div>
      </div>
      <div className="w-[350px] lg:w-[900px] ">
        <img src={Device} alt='background-image-hero'/>
      </div>
    </div>
  )
}

export default Hero