// 📁 src/components/Ranking.jsx
import React from 'react';

const Ranking = ({ standings = [] }) => {
   

  return (
    <div className='bg-white rounded-2xl shadow p-6 overflow-x-auto'>
      <h2 className='text-base font-semibold text-gray-700 mb-4'>Ranking</h2>
      <table className='w-full text-sm text-left border-collapse text-black'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='py-2 px-3 font-medium text-gray-600'>#</th>
            <th className='py-2 px-3 font-medium text-gray-600'>Club</th>
            <th className='py-2 px-3 font-medium text-gray-600'>P</th>
            <th className='py-2 px-3 font-medium text-gray-600'>W</th>
            <th className='py-2 px-3 font-medium text-gray-600'>D</th>
            <th className='py-2 px-3 font-medium text-gray-600'>L</th>
            <th className='py-2 px-3 font-medium text-gray-600'>GF</th>
            <th className='py-2 px-3 font-medium text-gray-600'>GA</th>
            <th className='py-2 px-3 font-medium text-gray-600'>GD</th>
            <th className='py-2 px-3 font-medium text-gray-600'>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team, index) => (
            <tr
              key={team.name}
              className={
                index < 4 ? 'bg-blue-50' : index === 4 ? 'bg-yellow-50' : ''
              }
            >
              <td className='py-2 px-3 font-medium'>{index + 1}</td>
              <td className='py-2 px-3 flex items-center gap-2'>
                <img src={team.logo} alt={team.name} className='w-5 h-5' />
                <span>{team.name}</span>
              </td>
              <td className='py-2 px-3'>{team.played}</td>
              <td className='py-2 px-3'>{team.win}</td>
              <td className='py-2 px-3'>{team.draw}</td>
              <td className='py-2 px-3'>{team.lose}</td>
              <td className='py-2 px-3'>{team.gf}</td>
              <td className='py-2 px-3'>{team.ga}</td>
              <td className='py-2 px-3'>{team.gd}</td>
              <td className='py-2 px-3 font-bold'>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
