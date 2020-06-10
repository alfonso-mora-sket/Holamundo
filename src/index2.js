//Importación de módulos y librerías
import React from 'react'
import ReactDom from 'react-dom'

//Creación de componente

//Componenetes funcionales
//const App = () => {
//    return <div>Hola mundo</div>
//}
//function App(){
//    return <div></div>
//}

class App extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
                    <h1>
                        Hola
                    </h1>
                    <h2>
                        mundo
                    </h2>
                </div>
        
    }
}
//Renderizado de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)