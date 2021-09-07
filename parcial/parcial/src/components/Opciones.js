import React from "react";

class Opciones extends React.Component{

    continuarHistoria = (e) => {
        this.props.handleClick(e.target.id)
    }

    render(){
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={this.continuarHistoria}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={this.continuarHistoria}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
        )
    }
}

export default Opciones;