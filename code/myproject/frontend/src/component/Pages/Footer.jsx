// 📁 src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaTimes } from 'react-icons/fa';

const Footer = () => {
    const leagues = [
    { name: 'Premier League', logo: '/Premier-League-Logo.png' },
    { name: 'Bundesliga', logo: '/Bundesliga_logo.png' },
    { name: 'La Liga', logo: '/la-liga-logo.png' },
    { name: 'Ligue 1', logo: '/Ligue1_logo.png' },
    { name: 'Serie A', logo: '/Serie_A_logo.png' }
  ]
  return (
    <footer className='bg-[#1c1c1c] text-white text-sm'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Matches Section */}
        <div>
          <h3 className='font-semibold mb-4'>LEAGUE</h3>
          <ul className='space-y-2'>
            {leagues.map(league=>(
            <li><a href='#' className='hover:text-gray-400'><img src={league.logo} alt={league.name} className='w-5 h-5' /> league.name</a></li>
            
            ))}
           
          </ul>
        </div>

        {/* Forza Football Section */}
        <div>
          <h3 className='font-semibold mb-4'>FORZA FOOTBALL</h3>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:text-gray-400'>Company</a></li>
            <li><a href='#' className='hover:text-gray-400'>Advertise</a></li>
            <li><a href='#' className='hover:text-gray-400'>Contact us</a></li>
            <li><a href='#' className='hover:text-gray-400'>Our mission</a></li>
            <li><a href='#' className='hover:text-gray-400'>Careers</a></li>
          </ul>
        </div>

        {/* Download Section */}
        <div>
          <h3 className='font-semibold mb-4'>DOWNLOAD</h3>
          <div className='space-y-2'>
            <img src='/stores/appstore.png' alt='App Store' className='w-32'/>
            <img src='/stores/googleplay.png' alt='Google Play' className='w-32'/>
            <img src='/stores/appgallery.png' alt='AppGallery' className='w-32'/>
          </div>
        </div>

        {/* Social Section */}
        <div>
          <h3 className='font-semibold mb-4'>FOLLOW US</h3>
          <div className='flex gap-6 text-lg'>
            <FaFacebookF className='hover:text-gray-400 cursor-pointer' />
            <FaInstagram className='hover:text-gray-400 cursor-pointer' />
            <FaTimes className='hover:text-gray-400 cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='text-center border-t border-gray-800 py-4 text-xs text-gray-400'>
        © Copyright {new Date().getFullYear()} Forza Football &nbsp;&nbsp;
        <a href='#' className='hover:text-white'>Legal</a> &nbsp;|&nbsp;
        <a href='#' className='hover:text-white'>Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
