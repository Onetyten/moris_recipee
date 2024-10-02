import React,{useState} from 'react'
import { UseGlobalContext } from '../../context'



export default function Search() {
    const {searchTerm,setSearchTerm,fetchRandomMeal} = UseGlobalContext()
    const[searchText,setSearchText] = useState("")

    function handleChange(e) {
        setSearchText(e.target.value)
        
        console.log(searchText,searchTerm)
        
        
    }
    function handleSubmit(e) {
        e.preventDefault()
        setSearchTerm(searchText)
    }

    
    const handleleRandomMeal=()=> {
        setSearchTerm('')
        setSearchText('')
        fetchRandomMeal()
        
    }



  return (
    <div className='w-full p-2 sm:p-6 py-7'>
        <form action="" className='flex justify-between w-full gap-2 sm:gap-6'onSubmit={handleSubmit}>
            <input type="text" name="" id="" className='text-xl w-full sm:text-2xl p-1 rounded-xl sm:rounded-full pl-4 sm:pl-8 h-14 bg-my-grey' placeholder='Search meal' onChange={handleChange} />
            {/* <button className='bg-dark-blue p-1 sm:p-3 rounded-xl text-xl sm:text-4xl text-dark-grey' type='submit'>
                Submit
            </button>  */}
            <button className='bg-my-orange p-1 sm:p-3 rounded-lg sm:rounded-2xl text-lg sm:text-2xl h-14  text-soft-yellow text-center'type='button' onClick={handleleRandomMeal}>
                Random
            </button>
        </form>
    </div>
  )
}
