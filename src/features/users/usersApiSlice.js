import { apiSlice } from "../../app/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => {
        return {
          url: "posts/",
          params: { rest: 5, hee: "e" },
        };
      },
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApiSlice;
