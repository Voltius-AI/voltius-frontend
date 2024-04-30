// In Next.js, this file would be called: app/providers.jsx
"use client";

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
// import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: true,
      refetchOnReconnect: false,
      retry: 2,
      staleTime: twentyFourHoursInMs,
    },
  },
});
export default function ReactQueryProvider({ children }) {
  // const [queryClient] = useState(
  //   () =>

  // );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
