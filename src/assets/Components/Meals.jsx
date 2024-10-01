import React, { useState } from 'react'
import { UseGlobalContext } from '../../context'





export default function Meals() {
  const{mealData, loading,name,gender,selectMeal,selectedMeal,addToFavorites,removeFromFavorites,favorites,setFavorites} = UseGlobalContext()

  if (loading){
    return(
      <div className='min-h-screen flex justify-center gap-8 items-center'>
        <p className='text-my-blue font-body text-5xl'>
          Loading
        </p>
        <i className='fa-solid fa-gear text-5xl text-my-blue animate-spin '></i>
      </div>

    )
  }

  if (mealData.length < 1){
    console.log("no meal data")
    return(
      <div className='min-h-screen flex justify-center gap-8 items-center'>
        <p className='text-my-blue font-body text-5xl'>
            No meals matched your search term 😔
        </p>
        
      </div>

    )
  }



  return (
    <div className='text-xl flex justify-center items-center'>
      <div className='flex flex-wrap gap-6 justify-center w-full items-center'>
        {mealData.map(function (meal){
          const{idMeal,strMeal:title, strMealThumb:image}= meal
          const isFavorite = favorites.some(favMeal => favMeal.idMeal === idMeal);
          return( 
            <div className='my-8'>
              <div className='text-my-blue w-40 sm:w-80 font-epic text-2xl sm:text-3xl my-4'>  
                {title}
              </div>
              <div className='w-40 sm:w-80 border-4 sm:border-8 border-my-blue rounded-2xl overflow-hidden'>
                <div className='relative' >
                  <img src={image} alt="" className='' onClick={()=>selectMeal(idMeal)} />
                  <i
                    className={`fa-${isFavorite ? "solid" : "regular"} fa-heart text-pink-600 absolute bottom-3 text-2xl sm:text-4xl right-3`}
                    onClick={() =>{if (!isFavorite){
                      addToFavorites(idMeal)
                    }
                  else{
                    removeFromFavorites(idMeal)
                  } }}
                  ></i>

                </div>


              </div>
            </div>
            

          )
        })}

      </div>
      {console.log(mealData)}

      

    </div>
  )
}
