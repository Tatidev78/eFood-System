import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../types'

type CartState = {
  items: Prato[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)

      console.log(state.items)
    }
  }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer