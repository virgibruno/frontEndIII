import React from "react";


class Historial extends React.Component{

    render(){
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionPrevia.toUpperCase()}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.historial.map( (opc, index) => (
                        <li key={index}>{opc.toUpperCase()}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Historial;