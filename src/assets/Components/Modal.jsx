import React from 'react';
import { UseGlobalContext } from '../../context';

export default function Modal() {
  const { closeModal, selectedMeal } = UseGlobalContext();


const renderIngredients = () => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedMeal[`strIngredient${i}`];
    const measure = selectedMeal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push(
        <div key={i} className='flex justify-between text-2xl text-my-blue border-my-blue border-b-2 p-1'>
          <p>{ingredient}</p>
          <p>{measure}</p>
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
    <div className='w-full h-screen fixed top-0  bg-[#1b254667] backdrop-blur-lg'>
      <div className='flex w-full h-full justify-center items-center'>

        <div className='w-3/5 h-4/5 text-xl bg-my-grey drop-shadow-2xl rounded-3xl overflow-scroll relative gd1'>
          <div className='fixed top-0 left-0 w-full bg-slate-900 flex justify-end z-10'>
            <i className='fa-close fa-solid p-1 text-3xl text-white pr-5 hover:text-red-500 ' onClick={closeModal} ></i>
          </div>

          <div className='grid  grid-cols-3 relative pt-10 gap-x-2 '>
             <div className='col-span-3 flex justify-between items-center  font-epic text-5xl px-6 h-28 bg-dark-blue rounded-2xl  '>
              <h1 className='border-4 border-dark p-3 mt-2 rounded-xl text-dark hover:bg-dark hover:text-white'>{selectedMeal.strMeal || "Meal not available"}</h1>
              <div className='flex gap-7'>
                <p className='bg-dark-grey text-my-blue  rounded-lg p-2 font-wulan text-2xl gap-x-5 pr-4'>
                    {selectedMeal.strArea}
                </p>
                <p className=' rounded-lg p-2 text-dark bg-my-blue font-wulan text-2xl gap-x-5 pr-4'> 
                  {selectedMeal.strCategory}
                </p>
              </div>
             </div>
             <div className=' row-span-2 col-span-1 grid p-4 '>
                <p className='font-epic text-3xl text-my-blue my-2'>Ingredients:</p>

                <div className="">
                  {renderIngredients()}
                </div>
               
                
                

             </div>
            <img
              src={selectedMeal.strMealThumb || 'default-image-url.jpg'}
              alt={selectedMeal.strMeal || "No image"}
              className='w-full h-80 object-cover rounded-3xl col-span-2  border-4 border-dark mt-3'
            />
            <div className='border-4 bg-dark rounded-2xl col-span-3 mt-2 p-6 text-2xl text-my-blue'>
              <p className='font-epic text-3xl'>Instructions:</p>
              <p>{selectedMeal.strInstructions || "No instructions available"}</p>
              {/* {selectedMeal.strSource && (
                <a href={selectedMeal.strSource} target='_blank' rel='noopener noreferrer'>
                  Original source
                </a>
              )} */}
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}
