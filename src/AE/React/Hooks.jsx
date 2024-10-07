import React, { useState, useEffect, useRef } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);

  const inputRef = useRef(null); // Create a ref for the input element

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM element and focus it
  };

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div>
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <hr></hr>
        <div>
            <p>UseRef</p>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    </div>
  );
}

export default Hooks;