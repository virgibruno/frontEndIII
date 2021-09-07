import React from "react";
import Opciones from "./Opciones"
import Historial from "./Historial"
import historia from "./data.json"

class Principal extends React.Component{
    constructor(){
        super();
        this.state = {
            loading : true,
            contador: 1,
            seleccionPrevia : "",
            historial : []
        }
    }

    componentDidMount = () => {
        setTimeout( () => this.setState({loading:false}), 1000)
    }

    handleClick = (opcion) =>{
        if (this.state.seleccionPrevia !== ""){
            this.state.historial.push(this.state.seleccionPrevia)
        }
        if(this.state.contador < 5){
            this.setState ( (state) => ({
                contador : state.contador + 1,
                seleccionPrevia : opcion.toLowerCase(),
            }))
        } else {
            alert("Fin.")
        }
    }

    render(){

        if(!this.state.loading){
            let seccion = historia.find(element => element.id === this.state.contador + this.state.seleccionPrevia)

            return(
            
                <div className="layout">
                    <h1 className="historia">{seccion.historia}</h1>
                    <Opciones handleClick={this.handleClick} opcionA={seccion.opciones.a} opcionB={seccion.opciones.b}/>
                    <Historial seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
                </div>
            
            )
        }
        else {
            return (
                <div className="layout">
                    <h1>Cargando historia...</h1>
                </div>
            )
        }
    }
}

export default Principal;
