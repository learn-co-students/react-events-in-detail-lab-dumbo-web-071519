import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

const onReceiveCoordinates = (mouseCoordinates) => {
  console.log(mouseCoordinates)
}

const onDelayedClick = (event) => {
  console.log(event)
}

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={onReceiveCoordinates} />
    <br/>
    <DelayedButton onDelayedClick={onDelayedClick} delay={1500} />
  </div>,
  document.getElementById('global')
);
