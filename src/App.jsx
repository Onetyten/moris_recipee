import { useState } from 'react'
import Meals from './assets/Components/Meals'
import Search from './assets/Components/Search'
import Modal from './assets/Components/Modal'
import Favorites from './assets/Components/Favorites'
import { UseGlobalContext } from './context'

function App() {
  const{modal,showModal,favorites}= UseGlobalContext()

  return (
    <main className=' font-wulan relative'>
      <Search/>
      {favorites.length >0 && <Favorites/>}
      <Meals/>
      {showModal&&<Modal/>}

    </main>
  )
}

export default App
