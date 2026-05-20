import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { Prato } from '../../types'

export type CartItem = Prato & {
  uniqueId: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push({
        ...action.payload,
        uniqueId: nanoid()
      })
    },

    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.uniqueId !== action.payload
      )
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions

export default cartSlice.reducer