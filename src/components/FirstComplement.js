import '../styles/index.css';
import { useState } from 'react';
let collect="";
const FirstComplement=(props)=>{
  const [count, setCount] = useState(0);
  const setNumber= (number)=>{
    collect += number;
    setCount(Number(collect));
    props.calc.first = count;
   
  }

  const clear=()=>{
    setCount(0)
  };
        return ( <div className="panel">
        <p>{count}</p>
        <div className="numbers">
          <button onClick={()=>{setNumber(1)}}>1</button>
          <button onClick={()=>{setNumber(2)}}>2</button>
          <button onClick={()=>{setNumber(3)}}>3</button>
          <button onClick={()=>{setNumber(4)}}>4</button>
          <button onClick={()=>{setNumber(5)}}>5</button>
          <button onClick={()=>{setNumber(6)}}>6</button>
          <button onClick={()=>{setNumber(7)}}>7</button>
          <button onClick={()=>{setNumber(8)}}>8</button>
          <button onClick={()=>{setNumber(9)}}>9</button>
          <button onClick={()=>{setNumber(10)}}>0</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>)
    
}
export default FirstComplement;