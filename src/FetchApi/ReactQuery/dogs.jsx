import React from "react";
import { fetchDoggo } from "./Fetchers/fetchers";
import { useQuery } from "react-query";

function Dogs() {
  const { data, status } = useQuery("dogs", fetchDoggo,{});
  if (status == "loading") {
    return <h1>Loading....</h1>
  }
  return (
    <div>
      <img src={data?.message} alt = "doggo" />
    </div>
  );
}

export default Dogs;
