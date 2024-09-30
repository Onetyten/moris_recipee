import React, { useEffect, useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext()
import axios from "axios";



const allMealUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`    
const randMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


const AppProvider = ({children})=>{
    const[searchTerm,setSearchTerm] = useState("")
    const[showModal ,setShowModal] = useState(false)
    
    const[mealData,setMealData] = useState([])
    const[loading,setLoading] = useState(true)

    const[selectedMeal,setSelectedMeal] = useState(null)
    const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem('favorites'))||[]);

    const selectMeal = (idMeal,favoriteMeal)=>{
       
       let meal;
       if (favoriteMeal){
        meal = favorites.find((meal) => meal.idMeal === idMeal)
       }
       else{
        meal = mealData.find((meal) => meal.idMeal === idMeal);
       }
       
       setSelectedMeal(meal)
       setShowModal(true)
       console.log(idMeal)
    }

    const addToFavorites =(idMeal) =>{
        
        const alreadyFavourite = favorites.find((meal) => meal.idMeal === idMeal);
        if (alreadyFavourite) return
        const meal = mealData.find((meal) => meal.idMeal === idMeal)
        const updatedFavorites = [...favorites,meal]
        setFavorites(updatedFavorites)
        console.log(favorites)
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
    }

    const removeFromFavorites = (idMeal)=>{
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal)
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites))

    }

    
    const fetchMeals = async(url)=>{
        try{
            const {data} = await axios(url)
            if (data.meals){
                setMealData(data.meals)
            }
            else{
                setMealData([])
            }
           
            
        }
        catch(error){
            console.log(error.response)
        }
        finally{
            setLoading(false)
        }
       
    }
    let comboMealUrl = allMealUrl+searchTerm
    const closeModal = ()=>{
        setShowModal(false)
    }
    const fetchRandomMeal=()=>{
        fetchMeals(randMealUrl)
    }


    useEffect(()=>{
        fetchMeals(allMealUrl)
    },[])

    useEffect(()=>{
        if (!searchTerm) return
        fetchMeals(comboMealUrl)
    },[searchTerm])
    
    return <AppContext.Provider value={{searchTerm,setSearchTerm,mealData, loading,name:"john", gender:"Male",fetchRandomMeal,showModal,setShowModal,selectMeal,selectedMeal,closeModal,addToFavorites,removeFromFavorites,favorites,setFavorites}}>
        {children}
    </AppContext.Provider>
}

export const UseGlobalContext = ()=>{
    return useContext(AppContext)
}


  

export {AppContext, AppProvider}  