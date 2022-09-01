import React, { useState, useEffect, forwardRef } from "react";

const CoolButton = forwardRef((props, ref) => {
  const [familyGreeting, setFamilyGreeting] = useState("Hi, Dad");
  useEffect(() => props.greetFunc(familyGreeting));
  return (
    <button
      ref={ref}
      onClick={() =>
        setFamilyGreeting((prevState) =>
          prevState == "Hi Mom" ? "Hi Dad" : "Hi Mom"
        )
      }
    >
      Don't use me
    </button>
  );
});
export default CoolButton;
