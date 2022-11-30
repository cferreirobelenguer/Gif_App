import { render,screen,fireEvent} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe("Pruebas del componente AddCategory",()=>{
    test("Verificar evento change del input y devuelve el valor que pone el usuario",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input=screen.getByRole('textbox')
        fireEvent.input(input,{target:{value:'pokemon'}})
        //screen.debug()
        expect(input.value).toBe('pokemon')
    }),
    test("Verificar que funciona onclick de button Enviar y devuelve valor si el input tiene valor",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const search=screen.getByRole('button')
        fireEvent.click(search,{target:{value:'pokemon'}})
        //screen.debug()
        expect(search.value).toBe('pokemon')
    }),
    test("Verificar que funciona onclick de button Enviar y devuelve valor si el input no tiene valor",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const search=screen.getByRole('button')
        fireEvent.click(search,{target:{value:''}})
        //screen.debug()
        expect(search.value).toBe('')
    }),
    test("Verificar que funciona onSubmit de formulario si el input tiene valor ",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input=screen.getByRole('textbox')
        const form= screen.getByRole('form')
        fireEvent.input(input,{target:{value:'pokemon'}})
        fireEvent.submit(form);
        expect(input.value).toBe("pokemon")
        //screen.debug()
    }),
    test("Verificar que funciona onSubmit de formulario si el input no tiene valor ",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input=screen.getByRole('textbox')
        const form= screen.getByRole('form')
        fireEvent.input(input,{target:{value:''}})
        fireEvent.submit(form);
        expect(input.value).toBe("")
        screen.debug()
    })


})