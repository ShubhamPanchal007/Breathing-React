import React, { Suspense } from "react";
import NativeFetch from "./throughFetch";
import ThroughAxios from "./throughAxios";
import ThroughSWR from "./throughSWR";
import ThroughReactQuery from "./ReactQuery/throughReactQuery";
function main() {
  return (
    <div>
        <h1>Relaxing images</h1>
        {/* <NativeFetch /> */}
        {/* <ThroughAxios/> */}
    {/* <Suspense fallback = {<h2>Upcoming....</h2>}>
        <ThroughSWR />
    </Suspense> */}
    <ThroughReactQuery/>
      </div>
  );
}

export default main;
