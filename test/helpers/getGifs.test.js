import { getGifs } from "../../src/helpers/getGifs";

const category="pokemon"
describe("Test de la función getGifs",()=>{
    test("Verificar que el resultado es de tipo object",async()=>{
        const result=await getGifs(category)
        //Verificar que el resultado es de tipo object ya que es un arreglo
        expect(typeof(result)).toEqual("object")
    }),
    test("Verificar que el resultado existe",async()=>{
        const result=await getGifs(category)
        //Verificar que el resultado existe
        expect(result).toBeTruthy()
    }),
    test("Verificar que el resultado de gifs sea mayor que 0 y que devuelva un objeto con atributos string",async()=>{
        const result=await getGifs(category)
        //Verificar que el resultado sea mayor que 0
        expect(result.length).toBeGreaterThan(0)
        //Verificar que los atributos del objeto son de tipo string
        expect(result[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String)
        })
    })
})