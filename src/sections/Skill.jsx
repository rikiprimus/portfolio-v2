import React, { useRef } from 'react';
import ButtonCard from "../components/Button/Buttoncard";
import Title from "../components/Typograph/title";
import SkillCard from "../components/Card/skillCard";
//image
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import MUI from '../assets/mui.png';
import ReactJS from '../assets/react.png';
import NextJS from '../assets/next.png';
import SQL from '../assets/sql.png';
import Figma from '../assets/figma.png';
import Office from '../assets/office.png';
import Adobe from '../assets/adobe.png';
//icon
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';

const Skill = () => {
  const photos = {
    HTML,
    CSS,
    Javascript,
    Office,
    Tailwind,
    Bootstrap,
    MUI,
    ReactJS,
    NextJS,
    SQL,
    Figma,
    Adobe
  };

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
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-[10px] py-[50px] md:px-[300px] md:py-[170px] gap-10">
      <div className='w-full md:w-[700px]'>
        <Title 
          title1='My'
          title2='Skills'
        />
        <p className='text-[13px] md:text-[25px] text-color4 opacity-70'>The skills I have learned so far</p>
      </div>
      <div className='w-full flex justify-center shadow hover:shadow-color3 rounded-xl md:w-[1060px] h-[300px]'>
        <ButtonCard 
          text={<MdOutlineArrowLeft size={30} />}
          rounded="rounded-l-xl"
          onClick={() => handleScroll('previous')}
        />
        <div className="flex items-center w-full overflow-x-auto" ref={containerRef} style={{ overflow: 'hidden' }}>
          <div className="flex gap-[50px] min-w-[2000px]">
            {Object.entries(photos).map(([name, image], index) => (
              <div className="min-w-[300px]" key={index}>
                <SkillCard image={image} text={name} />
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

export default Skill;
