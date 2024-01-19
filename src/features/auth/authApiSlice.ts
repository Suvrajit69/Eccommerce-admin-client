import { apiSlice } from "@/api/apiSlice";

export const signUpApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: Credential =>({
                url: "/users/signup",
                method: "POST",
                body: {...Credential}
            })
        }),
    })
})

export const {useLoginMutation} = signUpApiSlice;