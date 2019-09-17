// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component{


    createArray = (event) => {
        let valueArray = [event.clientX, event.clientY]
        console.log(valueArray)
        this.props.onReceiveCoordinates(valueArray)
    }

    render(){
        return(
            <button onClick={ this.createArray}> </button>
        )
    }

}