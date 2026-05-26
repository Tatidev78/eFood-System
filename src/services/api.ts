import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//  resposta do checkout
export interface PurchaseResponse {
  orderId: string
}

//  payload do checkout
export interface PurchasePayload {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),

    // ← Endpoint POST checkout
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

// Hooks 
export const { 
  useGetRestaurantesQuery, 
  useGetRestauranteQuery,
  usePurchaseMutation  // ← NOVO hook
} = api