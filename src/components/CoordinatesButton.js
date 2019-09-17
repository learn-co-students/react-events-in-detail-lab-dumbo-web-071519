// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

                    render(){
            return(
            <button onClick={this.props.onReceiveCoordinates}>Press</button>
            )

        }


}