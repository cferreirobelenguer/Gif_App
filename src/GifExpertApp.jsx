import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp=()=>{
    const [categories,setCategories]=useState([])

    const onAddCategory=(newCategory)=>{
        //Si la categoría existe que no haga nada, y si sí existe que lo inserte en el state
        if(categories.includes(newCategory)){return;}
        setCategories([newCategory,...categories])
        console.log(newCategory)
    }

    return(
        <div className="card_container">
            <div className="card_title">
                <h1>GifExpertApp</h1>
            </div>
            <AddCategory  onNewCategory={event=>onAddCategory(event)}></AddCategory>
            <div className="card_categories">
                
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