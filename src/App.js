import "./styles/App.css"
import "./components/FirstComplement"
import FirstComplement from "./components/FirstComplement";
import Operator from "./components/Operator";
import SecondComplement from "./components/SecondComplement";
import Result from "./components/Result";
import { useState } from 'react'

let firstCollect = "";
let secondCollect = "";
const checkFloat = ['.'];
function App() {
  /*
   <FirstComplement />
         <Operator/>
         <SecondComplement />
         <Result /> */

  const [first, setFirst] = useState(0);
  const setNumberFirst = (number) => {
    console.log('first', firstCollect);
    if (first === 0 && number === '.') {
      setFirst(Number('0.'));
    }
    if (first === 0 && number === 0) {
      if(!checkFloat.includes(firstCollect)){
        setFirst(0);
      }
      

    } else {
      firstCollect += number;
      setFirst(parseFloat(firstCollect));
    }

  }


  const clearFirst = () => {
    setFirst(0);
    firstCollect = "";
  };
  const [opt, setOpt] = useState(0);
  const setOperator = (operator) => {

    setOpt(operator);

  }
  const [second, setSecond] = useState(0);
  const setNumberSecond = (number) => {
    if (second === 0 && number === '.') {
      setSecond(Number('0.'));
    }
    if (second === 0 && number === 0) {
      if(!checkFloat.includes(secondCollect)){
        setSecond(0);
      }

    } else {
      secondCollect += number;
      setSecond(parseFloat(secondCollect));
    }
  }
  const clearSecond = () => {
    secondCollect = "";
    setSecond(0)
  };

  let [total, setTotal] = useState(0);
  const getTotal = (first, second) => {
    if (opt === '+') {
      total = first + second;
    } else if (opt === '-') {
      total = first - second;
    } else if (opt === '*') {
      total = first * second;
    } else if (opt === '÷') {
      total = first / second;
    }
    setTotal(total);

  }

  const clearAll = () => {
    firstCollect = "";
    secondCollect = "";
    setFirst(0);
    setSecond(0);
    setTotal(0);
  };
  return (

    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          <button onClick={() => { setNumberFirst(1) }}>1</button>
          <button onClick={() => { setNumberFirst(2) }}>2</button>
          <button onClick={() => { setNumberFirst(3) }}>3</button>
          <button onClick={() => { setNumberFirst(4) }}>4</button>
          <button onClick={() => { setNumberFirst(5) }}>5</button>
          <button onClick={() => { setNumberFirst(6) }}>6</button>
          <button onClick={() => { setNumberFirst(7) }}>7</button>
          <button onClick={() => { setNumberFirst(8) }}>8</button>
          <button onClick={() => { setNumberFirst(9) }}>9</button>
          <button onClick={() => { setNumberFirst(0) }}>0</button>
          <button onClick={clearFirst}>Clear</button>
          <button onClick={() => { setNumberFirst('.') }}>.</button>
        </div>
      </div>
      <div className="panel">
        <p>{opt}</p>
        <div className="numbers">
          <button onClick={() => { setOperator('+') }}>+</button>
          <button onClick={() => { setOperator('-') }}>-</button>
          <button onClick={() => { setOperator('*') }}>*</button>
          <button onClick={() => { setOperator('÷') }}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
          <button onClick={() => { setNumberSecond(1) }}>1</button>
          <button onClick={() => { setNumberSecond(2) }}>2</button>
          <button onClick={() => { setNumberSecond(3) }}>3</button>
          <button onClick={() => { setNumberSecond(4) }}>4</button>
          <button onClick={() => { setNumberSecond(5) }}>5</button>
          <button onClick={() => { setNumberSecond(6) }}>6</button>
          <button onClick={() => { setNumberSecond(7) }}>7</button>
          <button onClick={() => { setNumberSecond(8) }}>8</button>
          <button onClick={() => { setNumberSecond(9) }}>9</button>
          <button onClick={() => { setNumberSecond(0) }}>0</button>
          <button onClick={clearSecond}>Clear</button>
          <button onClick={() => { setNumberSecond('.') }}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={() => { getTotal(first, second) }}>=</button>
        </div>
        <div>
          <button className="clearAll" onClick={() => { clearAll() }}>Clear All</button>
        </div>
      </div>
    </div>
  )
}

export default App
