import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Fernando',
            lastname: 'Mendoza'
        }
    //this.changeManuel = this.changeManuel.bind(this)
    //this.changeFernando = this.changeFernando.bind(this)
    //this.changeLuis = this.changeLuis.bind(this)
    this.changeState = this.changeState.bind(this)
    }

    //changeManuel(){
    //    this.setstate({name = 'Manuel', lastname: 'Trujillo'})
   // }
    //changeFernando(){
    //    this.setstate({name = 'Fernado', lastname: 'Mendoza'})
   // }
    //changeLuis(){
    //    this.setstate({name = 'Luis', lastname: 'Rosas'})
   // }

   changeState(objectName){
       this.setState(objectName)
   }

    render(){
        return (
            <div>
            <h1>
                Hola {this.state.name + this.state.lastname}
            </h1>
            <button onClick={() => this.changeState({name: 'Fernando', lastname: 'Mendoza'})}>Fernando</button>
            <button onClick={() => this.changeState({name: 'Manuel', lastname: 'Mendoza'})}>Manuel</button>
            <button onClick={() => this.changeState({name: 'Luis', lastname: 'Rosas'})}>Luis</button>
             </div>
        )
    }
}

export default App