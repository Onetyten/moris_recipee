import React from 'react'
import { UseGlobalContext } from '../../context'




export default function Meals() {
  const{mealData, loading,name,gender} = UseGlobalContext()
  
  if (loading){
    return(
      <p>
        Loading
      </p>
    )
  }

  return (
    <div className='text-xl flex justify-center items-center'>
      <div className='grid grid-cols-4 gap-6'>
        {mealData.map(function (meal){
          const{idMeal,strMeal:title, strMealThumb:image}= meal
          return( 
            <div className='my-8'>
              <div className='text-my-green font-body text-3xl my-4'>
                {title}
              </div>
              <div className='w-80 border-8 border-my-green rounded-2xl overflow-hidden'>
                <div >
                  <img src={image} alt="" className='' />

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
