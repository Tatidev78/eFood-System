import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query({
      query: () => '/restaurantes'
    }),
    
    getRestaurante: builder.query({
      query: (id: number) => `/restaurantes/${id}`
    })
  })
})

export const { 
  useGetRestaurantesQuery, 
  useGetRestauranteQuery 
} = api