import {FaStar} from 'react-icons/fa'


const Favorites = ({ matches = [] }) => {
  return (
    <div className='bg-white rounded-lg shadow p-4 text-black'>
      <div className='flex items-center mb-4'> 
        <FaStar className='text-yellow-500 mr-2'/>
      <h2 className='text-lg font-bold text-gray-700' >Favorites</h2>
      </div>
     
      {matches.length === 0 ? (
        <p className='text-sm text-gray-400'>No favorite matches yet.</p>
      ) : (
        <div className='space-y-2'>
          {matches.map((match, index) => (
            <div
              key={index}
              className='bg-gray-100 hover:bg-gray-200 transition pb-3 pt-3 pr-6 pl-6 rounded-lg shadow-sm'
            > 
            
            {/* Match Date */}
              <div className='text-xs text-gray-600 mb-2'>Matchday {match.matchday} • {match.date}</div>

              <div className="flex"> 
                <div className='flex flex-col justify-center items-center text-black text-x font-semibold px-2 rounded mr-4'>
                  FT
                </div>
                <span> </span>
                <div className="flex-1 space-y-2"> 
              <div className='flex items-center justify-between'>
                
                {/* Home Team */}
                <div className='flex items-center gap-2 w-1/2'>
                  <img src={match.homeLogo} alt={match.home} className='w-6 h-6' />
                  <span className='text-sm font-medium'>{match.home}</span>
                </div>
                <span className='text-lg font-bold'>{match.homeScore}</span>
              </div>
              <div className='flex items-center justify-between mt-2'>
                {/* Away Team */}
                <div className='flex items-center gap-2 w-1/2'>
                  <img src={match.awayLogo} alt={match.away} className='w-6 h-6' />
                  <span className='text-sm font-medium'>{match.away}</span>
                </div>
                <span className='text-lg font-bold'>{match.awayScore}</span>
              </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites