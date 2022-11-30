import {useState} from 'react'

export const UseFetchGifs=(category)=>{
    const [datos,setDatos]=useState([])
    
    //Hook personalizado que hace la petición fetch a la api giphy para obtener los datos e imágenes
    const getGifs=async()=>{
            
            const url=`https://api.giphy.com/v1/gifs/search?api_key=XGHZ8VQzgcGSGPqo69RM3L48BXno61ZU&q=${category}`
            const resp=await fetch(url)
            const {data}=await resp.json()
            console.log(data)
            
            const gifs=data.map(img=>(
                {
                    id:img.id,
                    title:img.title,
                    url: img.images.downsized_medium.url
                    }
                )
            )
            setDatos(gifs)
            return (gifs)
                }
    

    return{
        datos,
        getGifs

    }
}