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
    <div className='w-full bg-my-blue p-2 sm:p-6'>
        <form action="" className='flex justify-start gap-2 sm:gap-6'onSubmit={handleSubmit}>
            <input type="text" name="" id="" className='text-xl sm:text-4xl p-1 rounded-xl' placeholder='Search meal' onChange={handleChange} />
            <button className='bg-dark-blue p-1 sm:p-3 rounded-xl text-xl sm:text-4xl text-dark-grey' type='submit'>
                Submit
            </button> 
            <button className='bg-dark-grey p-1 sm:p-3 rounded-xl text-xl sm:text-4xl  text-dark-blue text-center'type='button' onClick={handleleRandomMeal}>
                Suprise me
            </button>
        </form>
    </div>
  )
}
