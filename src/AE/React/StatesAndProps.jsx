
//Class Component
// import React from 'react';

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };  // Initialize state
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     })); // Update state
//   };

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;


//functional Component

import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);  // Effect re-runs only when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
