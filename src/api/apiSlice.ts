import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setCredentials, logOut } from "@/features/auth/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/admin/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauith = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");

    //send refresh token to get new access
    const refreshResult = await baseQuery("/users/refresh-token", api, extraOptions);
    console.log("refreshResult");

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }

  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauith,
  endpoints: (builder) => ({}),
});
