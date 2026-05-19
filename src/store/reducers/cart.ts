import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { Prato } from '../../types'

export type CartItem = Omit<Prato, 'price'> & {
  uniqueId: string
  price: number
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
    add: (state, action: PayloadAction<Prato & { price: number }>) => {
      state.items.push({
        ...action.payload,
        uniqueId: nanoid(),
        price: action.payload.price  // ← já vem como number do Modal
      })
    },

    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        item => item.uniqueId !== action.payload
      )
    },

    open: state => {
      state.isOpen = true
    },

    close: state => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer