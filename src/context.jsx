import React, { useEffect, useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext()
import axios from "axios";


const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=g'       
const randMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


const AppProvider = ({children})=>{
    const[mealData,setMealData] = useState({})
    const[loading,setLoading] = useState(true)

    
    const fetchMeals = async(url)=>{
        try{
            const {data} = await axios(url)
            setMealData(data.meals)
        }
        catch(error){
            console.log(error.response)
        }
        finally{
            setLoading(false)
        }
       
    }


    useEffect(()=>{
        fetchMeals(allMealUrl)
    },[])
    
    return <AppContext.Provider value={{mealData, loading,name:"john", gender:"Male"}}>
        {children}
    </AppContext.Provider>
}

export const UseGlobalContext = ()=>{
    return useContext(AppContext)
}




export {AppContext, AppProvider}  