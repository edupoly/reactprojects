import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
    // baseUrl: 'http://localhost:4000/pizzas',
    prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', `81fcbf8faemsh5fdfba9107d87d5p130b65jsn2953e08a5aed`)
        headers.set('x-rapidapi-host', `pizza-and-desserts.p.rapidapi.com`)
        return headers
      }
    }),
    endpoints: (builder) => ({
        getAllPizzas: builder.query({
        query: () => `/`,
        }),
    }),
})

export const { useGetAllPizzasQuery } = pizzaApi

