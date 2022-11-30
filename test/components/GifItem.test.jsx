import { GifItem } from '../../src/components';
const { render, screen } = require("@testing-library/react")


const title="Animation Lol GIF by Disney"
const url="https://giphy.com/gifs/disney-animation-bambi-IgLt8tZcGGYXS"

describe("Pruebas en <GifItem/>",()=>{
    test("Debe de hacer match con el snapshot",()=>{
        const {container}=render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    }),
    test("debe de mostrar la imagen con el URL y el ALT indicado",()=>{
        render(<GifItem title={title} url={url}/>)
        const{src,alt}=screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
        //screen.debug()
    }),
    test("Verificar que el title mostrado en etiqueta p es el correcto",()=>{
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})

