import React, { useEffect, useState } from "react";

function NativeFetch() {
  const [data, setData] = useState("");
  useEffect(() => {
    const res = fetch("https://source.unsplash.com/random/?relaxing")
      .then((res) => setData(res.url))
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <div style={{ marginInline: "auto" }}>
      {data ? <img src={`${data}`} alt="chill image" /> : <h1>Wait.....</h1>}
    </div>
  );
}

export default NativeFetch;
