import { useState } from "react";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";
import { useSelector, useDispatch } from "react-redux";

function Bank() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  const { loan, balance, loanPurpose: currentLoanPurpose, isLoading } = useSelector((store) => store.account);

  function handleDeposit() {
    if (depositAmount > 0) {
      dispatch(deposit({ amount: depositAmount, currency }));
      setDepositAmount("");
    }
  }

  function handleWithdrawal() {
    if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
      dispatch(withdraw({ amount: withdrawalAmount }));
      setWithdrawalAmount("");
    } else {
      alert("Invalid withdrawal amount!");
    }
  }

  function handleRequestLoan() {
    if (loanAmount > 0 && loanPurpose.trim() !== "") {
      dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }));
      setLoanAmount("");
      setLoanPurpose("");
    } else {
      alert("Please provide valid loan details.");
    }
  }

  function handlePayLoan() {
    if (loan > 0) {
      dispatch(payLoan());
    } else {
      alert("You don't have any active loans to pay.");
    }
  }

  return (
    <div>
      <h2>Your Account Operations</h2>
      {isLoading && <p>Loading...</p>}
      <p>Balance: {balance} {currency}</p>
      {loan > 0 && (
        <p>
          Loan: {loan} | Purpose: {currentLoanPurpose}
        </p>
      )}
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request Loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request Loan</button>
        </div>

        <div>
          <span>Pay back {loan}</span>
          <button onClick={handlePayLoan}>Pay Loan</button>
        </div>
      </div>
    </div>
  );
}

export default Bank;
