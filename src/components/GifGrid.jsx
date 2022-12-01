import React,{useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from '../components'

export const GifGrid=({category,idKey})=>{
    const {datos,isLoading}=useFetchGifs(category)

    return(
        <div>
            <div key={idKey} className='valor'>
                
                {
                    isLoading && (<h2>Cargando...</h2>)
                }

                <h3 className='valor'>{category}</h3>
                {datos.map((i)=>{
                    return(
                        <div key={i.id} className="card-grid">
                            <GifItem title={i.title} url={i.url}></GifItem>
                        </div>
                    )

                })}
            </div>

        </div>
    )
}
