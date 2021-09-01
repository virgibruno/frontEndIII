import { Component } from "react"

export default class Child extends Component{
    render () {
        return (
            <h1>Tu pedido: {this.props.menu}</h1>
        )
    }
}