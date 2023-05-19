import React, { useState } from 'react';
import './App.css';
const LoanCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handlePrincipalChange = (e) => {
    setPrincipal(e.target.value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleLoanTermChange = (e) => {
    setLoanTerm(e.target.value);
  };

  const calculateMonthlyPayment = () => {
    const r = interestRate / 100 / 12; 
    const n = loanTerm * 12; 

    const monthlyPayment =
      (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };
  const reset=()=>{
    setPrincipal(' ');
    setInterestRate(' ');
    setLoanTerm(' ');
    setMonthlyPayment(' ');
  };

  return (
    <div>
      <center>
      <h1 >Loan Calculator or (emi calculator)</h1>
      <div>
        <label>Loan Amount:</label>
        <input type="number" value={principal} onChange={handlePrincipalChange} />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <label>Loan Term (years):</label>
        <input type="number" value={loanTerm} onChange={handleLoanTermChange} />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h2>Monthly installment: {monthlyPayment} INR</h2>
      </div>
      </center>
    </div>
   
  );
};

export default LoanCalculator;
