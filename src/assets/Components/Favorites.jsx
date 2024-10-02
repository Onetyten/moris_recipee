import React from 'react'
import { UseGlobalContext } from '../../context'

export default function Favorites() {
  const{selectMeal,removeFromFavorites,favorites} = UseGlobalContext()
  return (
    <div className=' bg-soft-yellow p-1 px-8 border-b-4 sm:min-h-full'>
      <p className='text-xl sm:text-2xl  text-my-orange sm:py-4'>
        Favorites
      </p>
      <div className='flex flex-row sm:flex-col justify-center pb-4 sm:pb-0 items-center gap-6 flex-wrap overflow-scroll  '>
        {favorites.map((item)=>{
          const {idMeal,strMealThumb:image} = item;
          return(
            <div key={idMeal} className='flex flex-col justify-center relative'>
              <img src={image} alt="" className='sm:w-20 w-14  rounded-full border-4 border-my-orange'  onClick={()=>selectMeal(idMeal)}/>
              <button onClick={()=>removeFromFavorites(idMeal,true)} className='text-white text-xl absolute -bottom-4 sm:bottom-0  right-1/4 sm:right-0 sm:text-2xl'>
                <i className='fa-xmark text-sm fa-solid bg-my-orange p-1 px-2 rounded-full'></i>
              </button>

            </div>
          )
        })}
      </div>
      
    </div>
  )
}
