// Code CoordinatesButton Component Here
import React from 'react';
export default class CoordinatesButton extends React.Component{
    

    clickHendler = (event) => {
        console.log(event)
        var mouseCoordinates = [event.clientX, event.clientY]     // Get the horizontal coordinate
        
    //    let mouseCoordinates=[1, 2]
    this.props.onReceiveCoordinates(mouseCoordinates)
    // return coordinates=
    }

    render(){

       return(
           <button onClick={this.clickHendler}></button>
// (event) => this.props.onReceiveCoordinates(clickHendler)
       )


    }

}