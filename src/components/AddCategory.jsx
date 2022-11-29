import React, { useState } from 'react'

export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue]=useState("")

    const handlerChange=({target})=>{
        setInputValue(target.value)
        console.log(inputValue)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(inputValue)
        if(inputValue.trim().length<=1) return;
        onNewCategory(inputValue.trim())
        setInputValue("")
    }
    return(
        <div className="card_input">
            <div className="form_submit">
                <form onSubmit={onSubmit}>
                    <input 
                        className="inputStyle"
                        type="text"
                        placeholder="Introduce tu gift a buscar"
                        onChange={handlerChange}    
                    />
                </form>
            </div>
            <div className="submit_container">
                <button onClick={onSubmit} className="btn_submit">Enviar</button>
            </div>
            
            
        </div>
        
    )
}