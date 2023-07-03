import "./styles.css";
import { useState } from "react";
//here we will implement useState with  best practises
export default function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
      <span>Hi the count is {count}</span>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
