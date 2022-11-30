import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp=()=>{
    const [categories,setCategories]=useState([])

    const onAddCategory=(newCategory)=>{
        //Si la categoría existe que no haga nada, y si sí existe que lo inserte en el state
        if(categories.includes(newCategory)){return;}
        setCategories([newCategory,...categories])
        console.log(newCategory)
    }
    //se manda por props la función onNewCategory al componente AddCategory pasando el evento
    //Ya que necesitamos el inputValue que el dato que introduce el usuario para modificar setCategories
    return(
        <div className="card_container">
            <div className="card_title">
                <h1>GifExpertApp</h1>
            </div>
            <AddCategory  onNewCategory={event=>onAddCategory(event)}></AddCategory>
            <div className="card_categories">
                {/*Se recorren las categorías, poniendo como key el id*/}
                    {categories.map(i=>(
                            <div key={i} >
                                <GifGrid 
                                    category={i}
                                    idKey={i}>
                                </GifGrid>
                            </div>
                        )
                    )}
            </div>
        </div>
    )
}