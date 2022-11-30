import React, { useState } from 'react'

export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue]=useState("")

    const handlerChange=({target})=>{
        setInputValue(target.value)
    }

    const onSubmit=(event)=>{
        
        //onSubmit es llamado en la etiqueta form y en el botón submit
        //Esto significa que se mandan los datos tanto si presonamos enter con el teclado como si presionamos el botón
        event.preventDefault()
        if(inputValue.trim().length<=1) return;
        // Se coge el inputValue y se pone de parámetro en el método obtenido por props onNewCategory
        //Este método se va a encargar de modificar el arreglo dentro del state categories del componente GiftExpertApp
        onNewCategory(inputValue.trim())
        
        
    }
    return(
        <div className="card_input">
            <div className="form_submit">
                <form onSubmit={onSubmit} aria-label="form">
                    <input 
                        className="inputStyle"
                        type="text"
                        placeholder="Introduce tu gift a buscar"
                        onChange={handlerChange}
                        required    
                        value={inputValue}
                    />
                </form>
            </div>
            <div className="submit_container">
                <button onClick={onSubmit} className="btn_submit">Enviar</button>
            </div>
            
            
        </div>
        
    )
}