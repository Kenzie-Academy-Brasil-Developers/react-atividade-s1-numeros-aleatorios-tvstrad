import { useState } from "react";
import "./style.css";

const NewNumber = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button className="button" onClick={randomNumber}>
        {" "}
        Gerar novo número{" "}
      </button>
    </>
  );
};

export default NewNumber;
