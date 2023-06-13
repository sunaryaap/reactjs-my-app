import React from "react";

class App extends React.Component {
    state = {
        name: "kodekodekk",
        text: ""
    }

    click = () => {
        console.log('ok')
        this.setState({
            name : this.state.text
            // name: "Sunarya"
        })
        this.setState({
            text: ""
        })
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.text} onChange={this.change} />
                <button onClick={this.click}>Click</button>
            </div>
        )
    }
}

export default App;






