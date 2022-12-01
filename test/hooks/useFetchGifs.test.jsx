import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/UseFetchGifs";

describe("Pruebas en el hook useFetchGifs",()=>{
    test("Debe de regresar el estado inicial",()=>{
        const {result}=renderHook(()=>useFetchGifs('pokemon'))
        const {datos,isLoading}=result.current;
        //Se esperan los datos iniciales antes de hacer la petición cuando se renderiza el hook
        expect(datos).toEqual([])
        expect(isLoading).toBeTruthy()
    });
    test("Debe de retornar un arreglo de imagenes e isLoading en false",async()=>{
        const {result}=renderHook(()=>
            useFetchGifs("pokemon")
        )
        //Función que espera hast aque los resultados tengan datos
        await waitFor(
            ()=>expect(result.current.datos.length).toBeGreaterThan(0)
        )
        //Verifica que datos tiene información de imágenes e isLoading es false cuando retorna
        const {datos,isLoading}=result.current
        expect(datos.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})