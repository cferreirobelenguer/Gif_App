import { render,screen,fireEvent} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe("Pruebas del componente AddCategory",()=>{
    test("Verificar evento change del input y devuelve el valor que pone el usuario",()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input=screen.getByRole('textbox')
        fireEvent.input(input,{target:{value:'pokemon'}})
        //screen.debug()
        expect(input.value).toBe('pokemon')
    })
})