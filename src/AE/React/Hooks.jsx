import { useState, useEffect } from 'react';

function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Hooks;