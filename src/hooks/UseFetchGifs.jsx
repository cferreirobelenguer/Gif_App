import {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs=(category)=>{
    const [datos,setDatos]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    
    const getImages=async()=>{
        const newImages=await getGifs(category);
        setDatos(newImages)
        setIsLoading(false)
    }

    useEffect(()=>{
        getImages();
    },[])

    return{
        datos,
        isLoading

    }
}