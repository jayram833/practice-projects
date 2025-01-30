import { useState } from "react";

const data = [
  {
    id: 1,
    title: "User Agreement",
    termText: "Terms related to user account creation.",
    isAgreed: false,
  },
  {
    id: 2,
    title: "Privacy Policy",
    termText: "Terms related to use of user data.",
    isAgreed: false,
  },
  {
    id: 3,
    title: "Payment terms",
    termText: "Terms related to payments, fees, and refunds.",
    isAgreed: false,
  },
];

export default function App() {
  const [accordData, setAccordData] = useState(data);
  function handleAgree(id) {
    setAccordData(
      accordData.map((item) =>
        item.id === id ? { ...item, isAgreed: !item.isAgreed } : item
      )
    );
  }
  return (
    <div>
      <h1>Terms & Conditions</h1>

      <div className="accords-container">
        {accordData.map((item) => (
          <Accordion key={item.id} accordionData={item} onAgree={handleAgree} />
        ))}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}

function Accordion({ accordionData, onAgree }) {
  const { id, title, termText, isAgreed } = accordionData;

  return (
    <div className="accord">
      <h3>{title}</h3>
      <p>{termText}</p>
      <input
        id={id}
        type="checkbox"
        checked={isAgreed}
        onChange={() => onAgree(id)}
      />
      <label htmlFor={id}>I agree to these terms.</label>
    </div>
  );
}
