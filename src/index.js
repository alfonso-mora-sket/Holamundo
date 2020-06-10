//Importación de módulos y librerías
import React from 'react'
import ReactDom from 'react-dom'

//Crear componente
const App = () => {
    return <div>Hola amigos</div>
}

//Renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)