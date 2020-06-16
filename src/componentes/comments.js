import React from 'react'
import { date } from 'faker'

class Comments extends React.Component{
    constructor(props){
        super()
        this.state = {
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment
        }
    }

    //Estado y ciclo de vida de los componentes
    componentWillMount(){
        console.log('Antes del renderizado')
    }

    componentDidMount(){
        console.log('Después del renderizado')
    }

    componentWillReceiveProps(nextProps){
        console.log('Después de recibir las Props', nextProps)
    }

    componentWillUpdate(nextProps, nextState){
        console.log('El componente se va a Actualizar', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('El componente se Actualizó', prevProps, prevState)
    }

    componentWillUnmount(){
        console.log('Componente se va a desmontar o a borrar')
    }
    //----- ciclo de vida

    render(){
        return(

            <div className="ui comments">
                <div className="comment">
                    <a className="avatar">
                        <img src={this.state.userAvatar} alt="Imagen de usuario"/>
                    </a>
                    <div className="content">
                        <a className="author">{this.state.name}</a>
                        <div className="metadata">
                        <div className="date">{this.state.date}</div>
                        </div>
                        <div className="text">
                            {this.state.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments