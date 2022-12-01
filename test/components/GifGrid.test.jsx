import { render,screen } from "@testing-library/react";
import { GifGrid} from "../../src/components";

describe("Pruebas en GifGrid",()=>{
    test("Debe de mostrar el loading inicialmente",()=>{
        const category='pokemon'
        render(<GifGrid category={category}/>)
        screen.debug()
        //Se espera que aparezca Cargando... siempre antes de mostrar los resultados
        expect(screen.getByText("Cargando..."))
    }),
    test("Debe de mostrar el la categoría",()=>{
        const category='pokemon'
        render(<GifGrid category={category}/>)
        expect(screen.getByText(category))
    })

})