import React from 'react';
import { logo } from '../utils/Data';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <div className='mx-auto'>
      <nav className='w-full h-[60px] bg-black text-white flex px-[5%] justify-between items-center fixed top-0 left-0 z-20'>
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src={logo} alt="Logo" className='lg:w-[43px] w-[30px]' />
        </div>

        {/* Searchbar */}
        <div className="searchbar w-full max-w-[600px]">
          <Searchbar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
