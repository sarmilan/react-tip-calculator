import { useState } from "react";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tipAmount = billAmount * (myTip / 2 + friendTip / 2);

  return (
    <div className="inputs">
      <div>
        <p>How much was the bill? </p>
        <input
          type="text"
          inputMode="numeric"
          value={billAmount}
          onChange={(e) => setBillAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <p>How did you like the service? </p>
        <select onChange={(e) => setMyTip(e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={0.05}>It was OK (5%)</option>
          <option value={0.1}>It was good (10%)</option>
          <option value={0.2}>Absolutely amazing (20%)</option>
        </select>
      </div>
      <div>
        <p>How did your friend like the service? </p>
        <select onChange={(e) => setFriendTip(e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={0.05}>It was OK (5%)</option>
          <option value={0.1}>It was good (10%)</option>
          <option value={0.2}>Absolutely amazing (20%)</option>
        </select>{" "}
      </div>
      {billAmount > 0 && (
        <>
          <h2>
            You Pay ${billAmount + tipAmount} ($
            {myTip === 0 && friendTip === 0 ? 0 : billAmount} + $
            {tipAmount.toFixed(2)} tip)
          </h2>
          <button onClick={() => setBillAmount(0)}>Reset</button>
        </>
      )}
    </div>
  );
}
