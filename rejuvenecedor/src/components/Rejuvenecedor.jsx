import { Component } from "react"

export default class Rejuvenecedor extends Component{
    state = {
        name : "",
        age : 0
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            name: e.target.name.value,
            age: e.target.age.value > 9 ? e.target.age.value - 10 : 0
        })
        e.target.reset();
    }

    render(){
        return (
            <>
                <h1>Hello{this.state.name === "" ? " world" : " "+this.state.name}{this.state.age === 0 ? "!" : ", you have " + this.state.age + " years old. 😉"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                    <label for="age">Age:</label>
                    <input type="text" name="age" id="age"/>
                    <button type="submit">Enviar</button>
                </form>
            </>
        )
    }
}