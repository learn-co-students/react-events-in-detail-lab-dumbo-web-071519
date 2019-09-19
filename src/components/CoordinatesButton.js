import React, { Component } from 'react'

class CoordinatesButton extends Component {

    onClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button onClick={this.onClick}>
                Coordinates
            </button>
        )
    }
}

export default CoordinatesButton