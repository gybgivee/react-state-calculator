import '../styles/index.css';
import { useState } from 'react';

const Operator = (props) => {
  const [count, setCount] = useState(0);
  console.log('Count:', count);
  const setOperator = () => {
    props.calc.operator=count;
    setCount(count);

  }

  return (<div className="panel">
    <p>{count}</p>
    <div className="numbers">
      <button onClick={() => { setOperator('+') }}>+</button>
      <button onClick={() => { setOperator('-') }}>-</button>
      <button onClick={() => { setOperator('*') }}>*</button>
      <button onClick={() => { setOperator('÷') }}>÷</button>
    </div>
  </div>)

}
export default Operator;