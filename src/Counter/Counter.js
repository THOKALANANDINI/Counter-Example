import React from 'react';
import './Counter.css';
function Counter() {
  const [data, setData] = React.useState(0);

  function Incre() {
    setData((data) => data + 1);
  }
  function Decre() {
    setData(data - 1);
  }
  function Set() {
    setData(0);
  }
  return (
    <div>
      <h1>Counter:{data}</h1>
      <button onClick={Incre}>Incre+1</button>
      <button onClick={Decre}>Decre+1</button>
      <br />
      <br />
      <button onClick={Set}>Reset</button>
    </div>
  );
}
export default Counter;
