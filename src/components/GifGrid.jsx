import React,{useEffect} from 'react'
import { UseFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from '../components'

export const GifGrid=({category,idKey})=>{
    const {datos,isLoading}=UseFetchGifs(category)

    return(
        <div>
            <div key={idKey} className='valor'>
                <h3 className='valor'>{category}</h3>
                {
                    isLoading && (<h2>Cargando...</h2>)
                }
                {datos.map(({id,title,url})=>{
                    return(
                        <div key={id} className="card-grid">
                            <GifItem title={title} url={url}></GifItem>
                        </div>
                    )

                })}
            </div>

        </div>
    )
}
