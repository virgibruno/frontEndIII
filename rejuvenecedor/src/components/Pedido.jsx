import { Component } from "react"
import Child from "./Child";

export default class Pedidos extends Component{
    constructor(){
        super();
        this.state = {
            menu : "",
            show : true,
        }
    }
    
    componentDidMount = () => {
        setTimeout( ()=>{
            this.setState({
                menu : "pizza",
            })
        }, 2000)
    }

    componentDidUpdate = () =>{
        console.log("El pedido se actualizó!")
    }

    cancelOrder = () =>{
        alert("Tu pedido ha sido cancelado")
        this.setState({
            show : false
        })
    }
    


    render(){
        let order;
        if(this.state.show){
            order = <Child menu={this.state.menu}/>
        }
        return (
            <>
                {order}
                <button onClick={this.cancelOrder}>Cancelar pedido</button>
            </>
        )
    }
}