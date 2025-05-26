
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='min-h-screen bg-black text-white '>
      <div className=' mx-auto space-y-8'> 
       <Header />
      <main className='p-4'>  
        <Outlet />
      </main>
      </div>
    </div>
  )
}

export default Layout