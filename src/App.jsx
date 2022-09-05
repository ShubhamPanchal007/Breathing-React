import ChildComp from "./HookBuster/BustHooks";
import React from "react";
import { useRef } from "react";
function App() {
  // useState under the hood
  // console.log(useState(100)); //  [100, ƒ]
  // It returns an array with a variable and a function which comes vary helpful in changing the variable

  //Note: Refs cannot be passed as simply props to functional components.
  const ref = useRef();
  const clickIt = () => ref.current.click();
  const greetFunc = (greet) => console.log(greet);
  return (
    <div>
      <div>Change child state vars from parent</div>
      <button onClick={() => clickIt()}>Change'em</button>
      <ChildComp ref={ref} greetFunc={greetFunc}/>
       
    </div>
  );
}

export default App;
