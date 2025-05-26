import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaStar,
  FaRegNewspaper,
  FaCog,
  FaSearch,
  FaExchangeAlt,
} from 'react-icons/fa';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-[#0b1e34] text-white px-4 py-3'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl sm:text-2xl font-bold tracking-wide'>FOOTBALL PREDICTIONS</h1>

        {/* Hamburger icon on mobile */}
        <button
          className='sm:hidden text-white text-xl'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navbar on desktop */}
        <nav className='hidden sm:flex gap-6 text-sm font-medium'>
          <a href='#' className='hover:text-gray-300'>Home</a>
          <a href='#' className='hover:text-gray-300'>Fixtures</a>
          <a href='#' className='hover:text-gray-300'>Predictions</a>
          <a href='#' className='hover:text-gray-300'>Standings</a>
          <a href='#' className='hover:text-gray-300'>Teams</a>
        </nav>

        <div className='hidden sm:flex sm:items-center'>
          <a href='#' className='hover:text-gray-300 text-sm font-semibold mr-4'>Sign in</a>
          <a href='#' className='hover:text-gray-300 text-sm font-semibold'>Sign up</a>
        </div>
      </div>

      {/* Full screen mobile menu */}
      {isOpen && (
        <div className='fixed inset-0 bg-black text-white z-50 p-6 overflow-y-auto'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold'>FOOTBALL PREDICTIONS</h2>
            <button onClick={() => setIsOpen(false)} className='text-2xl' aria-label='Close Menu'>
              <FaTimes />
            </button>
          </div>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xs text-gray-400 mb-2 uppercase'>Football</h3>
              
              <div className='space-y-4'>
                 <a href='#' className='flex items-center gap-3 text-base'>
                  <FaSearch /> Search
                </a>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaCalendarAlt /> Fixtures
                </a>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaRegNewspaper /> Predictions
                </a>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaExchangeAlt /> Standings
                </a>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaStar /> Favorites
                </a>
               
              </div>
            </div>

            <div className='pt-6 border-t border-gray-700'>
              <h3 className='text-xs text-gray-400 mb-2 uppercase'>Account</h3>
              <div className='space-y-3'>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaCog /> Login
                </a>
                <a href='#' className='flex items-center gap-3 text-base'>
                  <FaCog /> Signup
                </a>
              </div>
            </div>

        
          </div>
        </div>
      )}
    </header>
  );
}

export default Header