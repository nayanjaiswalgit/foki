import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice.js"; // Import base API slice
import usersReducer from "../features/users/usersSlice.js"; // Example slice for users

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // API slice for RTK Query
    users: usersReducer, // Other feature reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add RTK Query middleware
});

export default store;
