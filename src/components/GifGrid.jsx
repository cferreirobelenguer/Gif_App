import React,{useEffect} from 'react'
import { UseFetchGifs } from '../assets/hooks/useFetchGifs'
import { GifItem } from '../components'

export const GifGrid=({category,idKey})=>{
    const {datos,getGifts}=UseFetchGifs(category)

    useEffect(()=>{
        getGifts(category)
    },[category])
    
    return(
        <div>
            <div key={idKey} className='valor'>
                <h3 className='valor'>{category}</h3>
                {datos.map((image)=>{
                    return(
                        <div key={image.id} className="card-grid">
                            <GifItem image={image}></GifItem>
                        </div>
                    )
                    
                    

                })}
            </div>

        </div>
    )
}
