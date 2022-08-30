import UseStateHook from "./HookBuster/useStateHook";
import { useRef } from "react";
function App() {
  const myBtn = useRef(null);
  // useState under the hood
  // console.log(useState(100)); //  [100, ƒ]
  // It returns an array with a variable and a function which comes vary helpful in changing the variable
  const clickIt = (myBtn) => myBtn();
  return (
    <div>
      <button >ClickMe</button>
      <UseStateHook click={clickIt} />
    </div>
  );
}

export default App;
