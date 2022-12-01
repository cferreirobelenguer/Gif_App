import { render,screen,fireEvent} from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";



test("probar",()=>{
    const container=render(<GifExpertApp/>)
    expect(container).toMatchSnapshot();
})