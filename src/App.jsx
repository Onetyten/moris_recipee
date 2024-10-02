import { useState } from 'react';
import Meals from './assets/Components/Meals';
import Search from './assets/Components/Search';
import Modal from './assets/Components/Modal';
import Favorites from './assets/Components/Favorites';
import { UseGlobalContext } from './context';

function App() {
  const { modal, showModal, favorites } = UseGlobalContext();

  return (
    <main className='relative'>
      <div className='flex flex-col lg:flex-row'> {/* Flex column for mobile, row for large screens */}
                {/* On larger screens, show favorites on the side */}
        {favorites.length > 0 && (
        <div className='hidden lg:block'>
          <Favorites />
        </div>
        )}
        <div className='w-full'>
          <Search />
          {/* On mobile, favorites will move below search */}
          {favorites.length > 0 && (
            <div className='lg:hidden'>
              <Favorites />
            </div>
          )}
          <Meals />
          {showModal && <Modal />}
        </div>


      </div>
    </main>
  );
}

export default App;
