import React, { useState } from 'react';
import { UseGlobalContext } from '../../context';

export default function Modal() {
  const { closeModal, selectedMeal } = UseGlobalContext();
  const [recipee,setRecipee] = useState(false)

function toggle() {
  setRecipee(!recipee)
} 


const renderIngredients = () => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedMeal[`strIngredient${i}`];
    const measure = selectedMeal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(
        <div key={i} className='flex justify-start items-center text-left text-lg sm:text-2xl p-1'>
          <div className='w-2 h-2 bg-dark-grey rounded-full mr-6'></div><p>{measure} of {ingredient}</p>
        </div>
      );
    }
  }
  return ingredients;
};

if (!selectedMeal) {
  return null; 
}





  return (
    <div className='w-screen h-screen fixed top-0 bg-[#a5744079] backdrop-blur-lg'>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='w-full sm:w-3/5 h-5/6 text-xl bg-soft-yellow drop-shadow-2xl rounded-sm overflow-scroll relative flex flex-col gap-5 items-center'>
          <img src={selectedMeal.strMealThumb || 'default-image-url.jpg'} alt={selectedMeal.strMeal || "No image"} className='w-full h-80 object-cover col-span-2 '/>
          <button className='text-lg sm:text-2xl right-4 top-4 bg-soft-yellow hover:bg-my-orange absolute rounded-lg p-3 text-my-orange hover:text-soft-yellow border-0 border-white text-center ' onClick={closeModal} >Close</button>

          <h1 className=' mt-2 rounded-xl text-my-orange mb-3 sm:mb-0 text-5xl font-bold'>{selectedMeal.strMeal || "Meal not available"}</h1>
          <div className='flex gap-2 sm:gap-7 '>
            <p className='bg-my-orange text-white  rounded-lg p-1 sm:p-2 text-lg sm:text-xl gap-x-5 text-center '>
                {selectedMeal.strArea}
            </p>
            <p className=' rounded-lg p-2 text-my-orange border-2 border-my-orange  text-lg sm:text-xl gap-x-5 text-center'> 
              {selectedMeal.strCategory}
            </p>
          </div>

          {}

          {recipee ? (
            <div className='row-span-2 col-span-1 grid p-4 text-dark-grey'>
              <p className='text-xl sm:text-4xl my-2 items-center text-center font-bold'>
                Ingredients
              </p>
              <div>
                {renderIngredients()}
              </div>
            </div>
          ) : (
            <div className=' rounded-2xl col-span-3  sm:mt-2 p-6 text-xl sm:text-2xl text-my-orange'>
              <p className='text-center mb-2 text-xl sm:text-4xl font-bold'>Instructions</p>
              <p className='text-dark-grey text-lg sm:text-xl'>{selectedMeal.strInstructions || "No instructions available"}</p>
            </div>

          )}

          <div className='w-full flex justify-between px-7 pb-7 '>
            <button className='text-md sm:text-2xl right-4 top-4 rounded-lg p-3 border-2 border-my-orange text-my-orange text-center'onClick={toggle}>
                {recipee ? 'Show instructions' : 'Show ingredients'}
            </button>
            <button className='text-md sm:text-2xl right-4 top-4 border-2 border-my-orange text-my-orange rounded-lg p-3 hover:text-my-orange text-center' onClick={closeModal} >Close
            </button>


          </div>

          
        
        
        </div>
      </div>
    </div>
  );
}




{/* <div className='fixed top-0 left-0 w-full bg-slate-900 flex justify-end z-10'>
          </div> */}

{/* {selectedMeal.strSource && (
  <a href={selectedMeal.strSource} target='_blank' rel='noopener noreferrer'>
    Original source
  </a>
)} */}

