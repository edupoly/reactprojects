import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dessertApi = createApi({
  reducerPath: 'dessertApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
    // baseUrl: 'http://localhost:4000/desserts',
    prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', `81fcbf8faemsh5fdfba9107d87d5p130b65jsn2953e08a5aed`)
        headers.set('x-rapidapi-host', `pizza-and-desserts.p.rapidapi.com`)
        return headers
      }
    }),
    endpoints: (builder) => ({
        getAllDesserts: builder.query({
        query: () => `/`,
        }),
    }),
})

export const { useGetAllDessertsQuery } = dessertApi

