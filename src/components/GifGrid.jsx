import React,{useState,useEffect} from 'react'

export const GifGrid=({category,idKey})=>{
    const [datos,setDatos]=useState([])
    useEffect(()=>{
        const getGifts=async()=>{
            const url=`https://api.giphy.com/v1/gifs/search?api_key=XGHZ8VQzgcGSGPqo69RM3L48BXno61ZU&q=${category}limit=20`
            const resp=await fetch(url)
            const {data}=await resp.json()
            console.log(data)
            const gifs=data.map(img=>(
                {
                    id:img.id,
                    title:img.title,
                    url: img.images.downsized_medium.rl
                    }
                )
            )
            setDatos(gifs)
            console.log(datos)
                }
            getGifts(category)
    },[category])
    
    return(
        <div>
            <div key={idKey} className='valor'>
                <h3 className='valor'>{category}</h3>
                {datos.map(({id,title})=>{
                    return(
                        <div key={id}>
                            <div>
                                <h5>{title}</h5>
                            </div>
                            
                        </div>
                    )
                    
                    

                })}
            </div>

        </div>
    )
}
