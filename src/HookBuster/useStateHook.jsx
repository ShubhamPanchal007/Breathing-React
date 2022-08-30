import React from "react";
import { useState } from "react";
import { useRef } from "react";

function UseStateHook({ click }) {
  const [fruit, setFruit] = useState({ fruit: "Jack Fruit 🍏" });
  // useState under the hood
  // console.log(useState(100)); //  [100, ƒ]
  // It returns an array with a variable and a function which comes vary helpful in changing the variable
  const myBtn = useRef(null);
  const clickIt = () => myBtn.current.click();
  return (
    <>
      <h1 style={{ marginTop: "1px" }}>{fruit?.fruit || "Fruity error 🍋"}</h1>
      <button
        onClick={() => {
          click(clickIt);
        }}
      >
        <h3>EatRealCool</h3>
      </button>
      <button
        ref={myBtn}
        onClick={() => {
          console.log("Stuff is working man");
          setFruit({ fruit: "Cool fruit 🍆" });
        }}
      >
        Click 2
      </button>
    </>
  );
}

export default UseStateHook;
