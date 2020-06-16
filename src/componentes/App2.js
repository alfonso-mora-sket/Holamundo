import React from 'react'
import Regards from './Regards'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Fernando',
            lastName: 'Mendoza'
        }
    // this.changeManuel = this.changeManuel.bind(this)
    // this.changeFernando = this.changeFernando.bind(this)
    // this.changeLuis = this.changeLuis.bind(this)

    // this.changeState = this.changeState.bind(this)

    }

    // changeManuel(){
    //    this.setstate({name = 'Manuel', lastName: 'Trujillo'})
    // }
    // changeFernando(){
    //    this.setstate({name = 'Fernado', lastName: 'Mendoza'})
    // }
    // changeLuis(){
    //    this.setstate({name = 'Alfonso', lastName: 'Mora'})
    // }

   changeState(objectName){
       this.setState(objectName)
   }

    render(){
        return (
            <div>
                <Regards objectName={this.state}/>
                {/*<h1>
                    Hola {this.state.name + ' ' + this.state.lastName}
                </h1>
                */}
                {/*}
                    <button onClick={this.changeFernando}>Fernando</button>
                    <button onClick={this.changeManuel}>Manuel</button>
                    <button onClick={this.changeAlfonso}>Alfonso</button>
                */}
                <button onClick={() => this.changeState({name: 'Fernando', lastName: 'Mendoza'})}>Fernando</button>
                <button onClick={() => this.changeState({name: 'Manuel', lastName: 'Trujillo'})}>Manuel</button>
                <button onClick={() => this.changeState({name: 'Alfonso', lastName: 'Mora'})}>Alfonso</button>
            </div>
        )
    }
}

export default App