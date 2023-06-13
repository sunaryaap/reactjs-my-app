import React from "react";

import "../styles/App.css";

// const App = () => <h1>Hello 1</h1>
const App = () => {
    return(
        <div className="box" style={{padding:"10px" }}>
            <h1 style={mystyle}>Helo World 2</h1>
        </div>
    )
}

const mystyle = {
    color: "blue",
    fontSize: "60px"
}

export default App;


