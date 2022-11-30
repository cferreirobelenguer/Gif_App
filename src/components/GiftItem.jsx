import React from 'react'

export const GifItem=({image})=>{
    return(
        <div className="card">
            
            <img src={image.url} alt="" className="imagenStyle"/>
            <p>{image.title}</p>
        </div>
    )
}