import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Dogs from "./Dogs";

function throughReactQuery() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Dogs/>
      </QueryClientProvider>
    </div>
  );
}

export default throughReactQuery;
