// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

    eventHandle =(e)=>{
    this.props.onReceiveCoordinates([e.clientX , e.clientY])
    }
        render(){
            return(
            <button onClick={this.eventHandle}>CLICK IT!</button>
            )

        }


}