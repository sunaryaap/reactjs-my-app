import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component{
    render(){
        console.log(this.props)
        return(
            <button>Click</button>
        )
    }
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired
}

Button.defaultProps = {
    color: "merah",
    test: "test"
}

export default Button;