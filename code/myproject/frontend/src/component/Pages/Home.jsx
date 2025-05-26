import React, { useState } from 'react';
import Favorites from './Favorites';
import Matches from './Matches';
import Ranking from './Ranking';
import Footer from './Footer';


const Home = () => {

  const [activeLeague, setActiveLeague] = useState('Premier League');
 const standings = [
    {
      name: 'Liverpool',
      logo: '/logos/liverpool.png',
      played: 38,
      win: 25,
      draw: 9,
      lose: 4,
      gf: 86,
      ga: 41,
      gd: 45,
      points: 84,
    },
    {
      name: 'Arsenal',
      logo: '/logos/arsenal.png',
      played: 38,
      win: 20,
      draw: 14,
      lose: 4,
      gf: 69,
      ga: 34,
      gd: 35,
      points: 74,
    },
    {
      name: 'Man City',
      logo: '/logos/mancity.png',
      played: 38,
      win: 21,
      draw: 8,
      lose: 9,
      gf: 72,
      ga: 44,
      gd: 28,
      points: 71,
    },
    {
      name: 'Chelsea',
      logo: '/logos/chelsea.png',
      played: 38,
      win: 20,
      draw: 9,
      lose: 9,
      gf: 64,
      ga: 43,
      gd: 21,
      points: 69,
    },
    {
      name: 'Newcastle',
      logo: '/logos/newcastle.png',
      played: 38,
      win: 20,
      draw: 6,
      lose: 12,
      gf: 68,
      ga: 47,
      gd: 21,
      points: 66,
    },
  ];

  const leagues = [
    { name: 'Premier League', logo: '/Premier-League-Logo.png' },
    { name: 'Bundesliga', logo: '/Bundesliga_logo.png' },
    { name: 'La Liga', logo: '/la-liga-logo.png' },
    { name: 'Ligue 1', logo: '/Ligue1_logo.png' },
    { name: 'Serie A', logo: '/Serie_A_logo.png' }
  ]

  const matches = [
    {
      home: 'Bournemouth',
      away: 'Leicester',
      homeScore: 2,
      awayScore: 0,
      homeLogo: '/bournemouth.png',
      awayLogo: '/leicester.png',
      matchday: 38,
      date: '2024-05-19'
    },
    {

      home: 'Bournemouth',
      away: 'Leicester',
      homeScore: 2,
      awayScore: 0,
      homeLogo: '/bournemouth.png',
      awayLogo: '/leicester.png',
      matchday: 38,
      date: '2024-05-19'
    },
    {
      home: 'Bournemouth',
      away: 'Leicester',
      homeScore: 2,
      awayScore: 0,
      homeLogo: '/bournemouth.png',
      awayLogo: '/leicester.png',
      matchday: 38,
      date: '2024-05-19'
    },
  ];

  return (
    <>
    <div className='bg-[#f7f9fc] min-h-screen px-4 py-6 space-y-6'>
      {/* Section: Filter bar */}
      <div className='bg-white text-black rounded-lg shadow-sm px-4 py-3 flex flex-wrap justify-center items-center gap-4 overflow-x-auto'>
        {leagues.map(league => (
          <button
            key={league.name}
            onClick={() => setActiveLeague(league.name)}
            className={`text-sm flex items-center gap-2 px-3 py-1 border-b-2 transition ${activeLeague === league.name
              ? 'border-black text-black font-semibold'
              : 'border-transparent text-gray-600 hover:text-black'
              }`}
          >
            <img src={league.logo} alt={league.name} className='w-5 h-5' />
            {league.name}
          </button>
        ))}
      </div>

      {/* Section: Favorites + Matches + Ranking + Teams */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {/* Left Column */}
        <div className='space-y-3'>

          <Favorites matches={matches} />

          <Matches />

        </div>

        {/* Right Column */}
        <div className='space-y-3'>
         
             <Ranking standings={standings}/>
           
          
        </div>
      </div>
   
    </div>
      <Footer />
      </>
  );
};

export default Home;
