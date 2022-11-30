import React from 'react'

export const GifItem=({title,url})=>{
    return(
        <div className="card">
            
            <img src={url} alt={title} className="imagenStyle"/>
            <p>{title}</p>
        </div>
    )
}