import { useState } from "react";
import { deposit, withdraw, loan } from "./bankSlice";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [depositAmt, setDepostAmt] = useState("");
  const [withdrawAmt, setWithdrawAmt] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const balance = useSelector((state) => state.bank.balance);
  const loanAmount = useSelector((state) => state.bank.loan);
  const dispatch = useDispatch();

  function handleDiposit() {
    dispatch(deposit(+depositAmt));
    setDepostAmt("");
  }
  function handleWithdraw() {
    dispatch(withdraw(+withdrawAmt));
    setWithdrawAmt("");
  }
  function handleLoan() {
    dispatch(loan(+loanAmt));
    setLoanAmt("");
  }

  return (
    <div>
      <h1>The React-Redux Bank</h1>
      <h2>Total Balance: {balance}</h2>
      <h2>Loan: {loanAmount}</h2>
      <div>
        <div>
          <label htmlFor="deposit">Deposit:</label>
          <input
            type="number"
            id="deposit"
            value={depositAmt}
            onChange={(e) => setDepostAmt(e.target.value)}
          />
          <button onClick={() => handleDiposit()}>Deposit</button>
        </div>
        <div>
          <label htmlFor="withdraw">Withdraw:</label>
          <input
            type="number"
            id="withdraw"
            value={withdrawAmt}
            onChange={(e) => setWithdrawAmt(e.target.value)}
          />
          <button onClick={() => handleWithdraw()}>Withdraw</button>
        </div>
        <div>
          <label htmlFor="loan">Loan:</label>
          <input
            type="number"
            id="loan"
            value={loanAmt}
            onChange={(e) => setLoanAmt(e.target.value)}
          />
          <button onClick={() => handleLoan()}>Request Loan</button>
        </div>
      </div>
    </div>
  );
}
