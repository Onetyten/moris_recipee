import React from 'react'
import { UseGlobalContext } from '../../context'

export default function Favorites() {
  const{selectMeal,removeFromFavorites,favorites} = UseGlobalContext()
  return (
    <div className='w-full bg-dark p-2 px-8 rounded-b-2xl border-b-4 border-my-blue'>
      <p className='text-xl sm:text-3xl text-my-blue pb-2'>
        favorites
      </p>
      <div className='flex gap-6 flex-wrap '>
        {favorites.map((item)=>{
          const {idMeal,strMealThumb:image} = item;
          return(
            <div key={idMeal} className='flex flex-col justify-center '>
              <img src={image} alt="" className='w-14 h-14 rounded-full'  onClick={()=>selectMeal(idMeal)}/>
              <button onClick={()=>removeFromFavorites(idMeal,true)} className='text-red-600 text-xl  sm:text-2xl'>
                remove
              </button>

            </div>
          )
        })}
      </div>
      
    </div>
  )
}
