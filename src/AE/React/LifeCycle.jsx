//Functional Component
// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const timerID = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     return () => clearInterval(timerID);  
//   }, []); 

//   return <h1>Seconds: {seconds}</h1>;
// }

// export default Timer;

//class Component

import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        seconds: 0 
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => 
        this.add(), 
    1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  add() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  }

  render() {
    return <h1>Seconds: {this.state.seconds}</h1>;
  }
}

export default Timer;

