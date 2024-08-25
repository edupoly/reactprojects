// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPizzasQuery } = pizzasApi