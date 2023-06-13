import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    
    render(){
        return(
            <div style={{ backgroundColor:"#f1f1f1", padding: "10px" }}>
                <h1>List</h1>
                <h3>book: {this.props.book}</h3>
                <h3>author: {this.props.author}</h3>
                {/* <h3>Name dari App: {this.props.name}</h3>
                <h3>Test dari App: {this.props.test}</h3>
                <h3>MyBook dari App: {this.props.myBook}</h3>
                <h3>children dari App: {this.props.children}</h3> */}
                <ListItem />
            </div>
        )
    }
}

export default List;