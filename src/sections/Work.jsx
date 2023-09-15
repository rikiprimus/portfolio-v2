import React, { useRef } from 'react';
import ButtonCard from "../components/Button/Buttoncard";
import Title from "../components/Typograph/title";
import WorkCard from '../components/Card/workCard';
//image
import Dashboard from '../assets/dashboard.png'
import Alnasr from '../assets/alnasr.png'
import Bubble from '../assets/bubble.png'
import Portfolio1 from '../assets/portfolio1.png'
import Portfolio2 from '../assets/portfolio2.png'
//icon
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';


const Work = () => {
  const photos = [
    {
      image: Alnasr,
      details: 'https://github.com/rikiprimus/alnasr',
      demo: 'https://alnasrr.netlify.app/'
    },
    {
      image: Bubble,
      details: 'https://github.com/rikiprimus/bubble-bash',
      demo: 'https://bubblebash.netlify.app/'
    },
    {
      image: Dashboard,
      details: '_blank',
      demo: 'https://github.com/rikiprimus/dash-alsteam'
    },
    {
      image: Portfolio1,
      details: 'https://github.com/rikiprimus/portofolio',
      demo: 'https://rikiprimus.github.io/portofolio/'
    },
    {
      image: Portfolio2,
      details: '_blank',
      demo: 'https://portofolio-ricky.netlify.app/'
    },
    // Dan seterusnya untuk gambar lainnya
  ];

  //Untuk tombol geser
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'next' ? 350 : -350;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center px-[10px] py-[50px] md:px-[300px] md:py-[170px] gap-10">
      <div className='flex flex-col items-end w-full md:w-[700px]'>
        <Title 
          title1='My'
          title2='Works'
        />
        <p className='text-[13px] md:text-[25px] text-end text-color4 opacity-70'>Some websites that I have created</p>
      </div>
      <div className='flex justify-center shadow hover:shadow-color3 rounded-xl w-full md:w-[1060px] h-[300px] md:h-[450px]'>
        <ButtonCard 
          text={<MdOutlineArrowLeft size={30} />}
          rounded="rounded-l-xl"
          onClick={() => handleScroll('previous')}
        />
        <div className="flex flex-row-reverse items-center w-full overflow-x-auto" ref={containerRef} style={{ overflow: 'hidden' }}>
          <div className="flex flex-row-reverse gap-[59px] min-w-[1700px] md:min-w-[2600px]">
            {photos.map((photo, index) => (
              <div className="min-w-[293px]" key={index}>
                <WorkCard 
                  image={photo.image}
                  button1={photo.details}
                  button2={photo.demo}
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonCard 
          text={<MdOutlineArrowRight size={30} />}
          rounded="rounded-r-xl"
          onClick={() => handleScroll('next')}
        />
      </div>
    </div>
  )
}

export default Work;