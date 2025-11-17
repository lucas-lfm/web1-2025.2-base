import { useState } from "react";
import "./Counter.css";

function Counter() {
  // Explicar por partes => const counterState = useState(0);
  // counterState[0], counterState[1]
  let [counter, setCounter] = useState(0);

  // Explicar por partes. Primeiro manipulado a variável diretamente, depois por meio do setState
  // Por fim, explicar o uso do setState com função callback
  const handlePlus = () => {
    setCounter( prevValue => prevValue + 1 );
  };

  const handleMinus = () => {
    setCounter( prevValue => prevValue - 1 );
  };

  return (
    <div className='counter-component'>
      <p>Valor atual: {counter}</p>
      <div>
        <button className='btn-counter' onClick={handleMinus}>-</button>
        <button className='btn-counter' onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default Counter;
