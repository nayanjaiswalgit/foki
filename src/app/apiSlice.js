import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // A unique key for this slice
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }), // Base URL for API requests
  endpoints: () => ({}), // Feature-specific slices will inject endpoints
});

export default apiSlice;
