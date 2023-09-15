import react, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  //useState untuk open mobile navbar
  const [menuOpen, setMenuOpen] = useState(true); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <div className="bg-color1 w-full flex items-center justify-between px-[5px] py-[30px] z-10 md:px-[200px] md:py-[50px]">
      <a href="" alt='Ricky' className="font-bold font-oswald text-2xl p-4">Ricky</a>
      <ul className="hidden items-center h-[40px] gap-10 md:flex">
        <li><a href="" alt="Home" className="p-4 rounded-xl hover:shadow hover:shadow-color3">Home</a></li>
        <li><a href="#about" alt="About" className="p-4 rounded-xl hover:shadow hover:shadow-color3">About</a></li>
        <li><a href="#skill" alt="Skill" className="p-4 rounded-xl hover:shadow hover:shadow-color3">Skills</a></li>
        <li><a href="#work" alt="Works" className="p-4 rounded-xl hover:shadow hover:shadow-color3">My Works</a></li>
      </ul>
      <div className="flex items-center justify-center h-[60px] w-[60px] cursor-pointer md:hidden" onClick={toggleMenu}>
          {!menuOpen ? <HiX size={35} /> : <HiMenu size={35} />}
      </div>
      <div className={!menuOpen ? 'w-full fixed right-0 top-[102px] p-4 rounded-xl h-full bg-color1 border pt-8 ease-in-out duration-300 z-10 md:hidden': 'fixed right-[-100%]'}>
        <ul className="flex flex-col justify-center items-center gap-10">
          <li><a href="/home" alt="Home" className="w-full p-4 font-semibold text-primary text-[15px] hover:shadow-color3">Home</a></li>
          <li><a href="/about" alt="About" className="w-full p-4 font-semibold text-primary text-[15px] hover:shadow-color3">About</a></li>
          <li><a href="/skill" alt="Skill" className="w-full p-4 font-semibold text-primary text-[15px] hover:shadow-color3">Skills</a></li>
          <li><a href="/work" alt="Works" className="w-full p-4 font-semibold text-primary text-[15px] hover:shadow-color3">My Works</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar