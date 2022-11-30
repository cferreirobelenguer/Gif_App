import { GifItem } from '../../src/components';
const { render } = require("@testing-library/react")

const image="https://one-punch.com/saitama.jpg"
describe("Pruebas en <GifItem/>",()=>{
    test("Debe de hacer match con el snapshot",()=>{
        const {container}=render(<GifItem image={image}/>)
        expect(container).toMatchSnapshot();
    })
})