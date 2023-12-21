import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unsplashApi = createApi({
    reducerPath: "unsplashApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
    endpoints: (builder) => ({
        getUnsplash: builder.query({
            query: () => "/photos?client_id=hGSVwpcfEvWgE49pmqO8sTSiI3na4KEZVC8cvla4thU"
        }),
        getUnsplashBySearch: builder.query({
            query: ({ query, page, per_page }) => `/search/photos?query=${query}&page=${page}&per_page=${per_page}&client_id=hGSVwpcfEvWgE49pmqO8sTSiI3na4KEZVC8cvla4thU`
        })
    })
})

export const { useGetUnsplashQuery, useGetUnsplashBySearchQuery } = unsplashApi