import "./styles/App.css"
import { useState } from 'react'

let firstCollect = "";
let secondCollect = "";
function App() {

  const [first, setFirst] = useState(0);
  const [opt, setOperator] = useState('+');
  const [second, setSecond] = useState(0);
  let [total, setTotal] = useState(0);

  const setNumberFirst = (number) => {
    let isFloat = true;
    console.log('number: ' + number);
    console.log('first: ' + first);
    if (first == 0 && number == 0 && !first.includes('.')) {
      setFirst(0);
      isFloat = false;

    }
    if (isFloat) {
      firstCollect += number;
      console.log('firstCollect: ' + firstCollect);
      setFirst(firstCollect);
      console.log(first);
    }
  }
  const setNumberSecond = (number) => {
    let isFloat = true;
    if (second == 0 && number == 0 && !second.includes('.')) {
      setSecond(0);
      isFloat = false;
    }
    if (isFloat) {
      secondCollect += number;
      setSecond(secondCollect);
    }
  }

  const getTotal = (first, second) => {
    first = parseFloat(first);
    second = parseFloat(second);
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
  const clearSecond = () => {
    secondCollect = "";
    setSecond(0)
  };
  const clearFirst = () => {
    setFirst(0);
    firstCollect = "";
  };
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