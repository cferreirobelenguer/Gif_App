# GIF EXPERT APP

    - App que mediante un input permite al usuario introducir una categoría, esta la muestra junto con los gifs relacionados con esa categoría y el título correspondiente a estos. Esos datos los obtiene mediante la API de giphy.
    - Test
## TECNOLOGÍAS
    - React (hooks)
    - scss
    - css (flexbox)

## VISTA SIN DATOS DESKTOP
![image](https://user-images.githubusercontent.com/88061350/204785192-a49bd34b-c2b9-412e-acfd-228c7a0c59e7.png)

## VISTA DESKTOP CON DATOS
![image](https://user-images.githubusercontent.com/88061350/204785702-16e116bd-d146-4789-91ac-653e0f4d6e44.png)

## VISTA RESPONSIVE SIN DATOS
![image](https://user-images.githubusercontent.com/88061350/204785872-1b8c0c7d-f8be-4f80-b006-c2fe42b475d4.png)

## VISTA RESPONSIVE CON DATOS
![image](https://user-images.githubusercontent.com/88061350/204785972-d29793f8-7d81-4efc-9d6c-a5ca688fe238.png)

# Instalación y configuracion de Jest + React Testing Library

## En proyectos de React + Vite

### Instalaciones:

    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
    yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

### Opcional: Si usamos Fetch API en el proyecto:

    yarn add --dev whatwg-fetch

### Actualizar los scripts del package.json

    "scripts: {
    ...
    "test": "jest --watchAll"

### Crear la configuración de babel babel.config.js

    module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };

## Opcional, pero eventualmente necesario, crear Jest config y setup:

### jest.config.js

        module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }

### Nota: en caso de que de error module.exports, quitar type:module en package.json

### jest.setup.js

    // En caso de necesitar la implementación del FetchAPI
    import 'whatwg-fetch'; // <-- yarn add whatwg-fetch