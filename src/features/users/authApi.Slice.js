import { apiSlice } from "../../app/apiSlice";

export const authAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/token/",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        localStorage.setItem("refresh", response.refresh);
        localStorage.setItem("access", response.access);
        return response;
      },

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(apiSlice.endpoints.getUserProfile.initiate());
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authAPISlice;
