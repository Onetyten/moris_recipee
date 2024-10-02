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
    <div className='text-xl w-full flex justify-center items-center'>
      <div className='flex flex-wrap gap-6 justify-center w-full items-center'>
        {mealData.map(function (meal){
          const{idMeal,strMeal:title, strMealThumb:image, strArea:area ,strCategory:category}= meal
          const isFavorite = favorites.some(favMeal => favMeal.idMeal === idMeal);
          return( 
            <div className='my-8'>

              <div className='border-2 border-my-orange rounded-2xl overflow-hidden'>
                <div className='relative flex flex-row' >
                  <img src={image} alt="" className='w-80 sm:w-96' onClick={()=>selectMeal(idMeal)} />



                    <h2 className='text-white bg-my-orange left-2 p-3 rounded-2xl text-xl sm:text-2xl my-2 sm:my-4 absolute'>  
                        {title}
                    </h2>
                    <div className='w-full h-16 bg-soft-yellow absolute bottom-0 flex justify-between items-center'>
                      <p className=' rounded-lg p-2 text-lg sm:text-2xl text-center text-my-orange'> 
                        {category}
                      </p>
                      <div className='flex items-center text-2xl sm:text-2xl mr-3 text-my-orange sm:border-2 border-my-orange p-1 rounded-md  '>
                        <i
                          className={`fa-${isFavorite ? "solid" : "regular"} fa-bookmark mr-3`}
                          onClick={() =>{if (!isFavorite){
                          addToFavorites(idMeal)
                          }
                        else{
                        removeFromFavorites(idMeal)
                          } }}>
                        </i>

                        <p className='pr-1 hidden sm:inline'>
                          Save
                        </p>

                      </div>

                    </div>

                    
                  
                    {/* <div className='flex gap-2 sm:gap-7 '>
                      <p className='bg-dark-grey text-my-blue  rounded-lg p-1 sm:p-2 font-wulan text-lg sm:text-2xl gap-x-5 text-center '>
                          {area}
                      </p>
                      
                    </div> */}
                      

                  
                 

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
