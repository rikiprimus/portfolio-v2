import Bgabout from '../assets/bgabout.svg'
import Gaming from '../assets/gaming.svg'
import Title from '../components/Typograph/title'

const About = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center px-[10px] py-[50px] lg:px-[200px] lg:py-[100px] gap-12">
      <div className='w-full md:w-[700px]'>
        <Title 
          title1='About'
          title2='me'
        />
        <p className='text-[13px] md:text-[20px] text-color4 opacity-70'>Hello, I'm Ricky Primus Saputra, a Web Developer. I recently graduated in Computer Engineering from Gunadarma University. I'm someone who is deeply passionate about everything related to computers, from coding to video editing. I also enjoy playing games. Currently, I'm looking to advance my career as a Front-end Web Developer.</p>
      </div>
      <div className='relative w-[300px] md:w-[660px]'>
        <img src={Gaming} alt='Gaming' className='absolute w-full left-[10px] bottom-[-50px] md:left-[90px] md:bottom-[-90px]'/>
        <img src={Bgabout} alt='background-about'/>
      </div>
    </div>
  )
}

export default About