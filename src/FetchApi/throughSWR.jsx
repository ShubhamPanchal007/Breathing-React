import React from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
function throughSWR() {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher,
    { suspense: true ,}
  );
  if (error) {
    return <h2>Error in the house</h2>;
  }
  return (
    <div style={{ marginInline: "auto" }} sus>
      <img src={`${data.message}`} alt="chill image" />
    </div>
  );
}

export default throughSWR;
