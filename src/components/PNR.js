import React, { useState } from "react";
import './PNR.css'

const PNR = () => {
  const [intrest, setIntrest] = useState("");
  const [principal, setPrincipal] = useState("");
  const [time, setTime] = useState("");
  const [total, setTotal] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    if (!intrest || !principal || !time) {
      alert("Please make sure that you have filled the all inputs !");
    } else {
      let total =
        parseFloat(principal) * parseFloat(time) * parseFloat(intrest) / 100;
        console.log(parseFloat(total));
      setTotal(parseFloat(total));
     
    }
  };

  const clear = () => {
    setPrincipal("");
    setIntrest("");
    setTime("");
    setTotal("");
  };

  return (
    <div className="container">
      
      <form onSubmit={calculate}>
      <h3>{total} ₹</h3>
        <label htmlFor="Intrest rate">Enter the rate of intrest</label>
        <input
          type="number"
          value={intrest}
          onChange={(e) => {
            setIntrest(e.target.value);
          }}
          placeholder="Add the rate of intrest"
        />

        <label htmlFor="Princilple Amount">Enter the Principal Amount</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => {
            setPrincipal(e.target.value);
          }}
          placeholder="Add the principal amount"
        />

        <label htmlFor="time period">Enter the time period</label>
        <input
          type="number"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          placeholder="Add the time period"
        />
        <div className="buttons">
        <button className="btn" type="submit">
          Calculate
        </button>
        <button className="btn-clr" onClick={clear}>
          Clear
        </button>
        </div>
      </form>
    </div>
  );
};

export default PNR;
