import React, { useState } from 'react';

import { MdArrowUpward } from 'react-icons/md'

const Buttontop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 bg-color2 text-white rounded-md shadow-md ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <MdArrowUpward size={30}/>
    </button>
  );
};

export default Buttontop