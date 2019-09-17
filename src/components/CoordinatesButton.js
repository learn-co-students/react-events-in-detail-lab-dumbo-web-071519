// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component{
    
    findCoords = (event) => {
       const xCord =  event.clientX;
       const yCord =  event.clientY;
       this.props.onReceiveCoordinates([xCord, yCord])
    }
    
    
    
    render(){
        return (
            <button onClick={this.findCoords}></button>
        )
    }
}