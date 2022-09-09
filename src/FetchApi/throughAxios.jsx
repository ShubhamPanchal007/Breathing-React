import React from "react";
import axios from "axios";

function ThroughAxios() {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((r) => setData(r.data.message));
  },[]);
  console.log("realoaded bay")
  return (
    <div style={{ marginInline: "auto" }}>
      {data ? <img src={`${data}`} alt="chill image" /> : <h1>Wait.....</h1>}
    </div>
  );
}

export default ThroughAxios;
