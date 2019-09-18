// Code DelayedButton Component Here
import React from 'react';
export default class DelayedButton extends React.Component{

   clickHendler=(event)=>{
       console.log(this.props.delay)
       event.persist();
    //    console.log(eventType)
       setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
       
   }
    render(){
     return( 
     <button onClick={this.clickHendler}></button>)
       
    }
}                        