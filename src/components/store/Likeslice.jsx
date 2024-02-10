import { createSlice } from '@reduxjs/toolkit'

const Likeslice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        like: (state, data) => {
            state.cart.push(data.payload)
            // console.log('data', data)
            // state.cart = [...state.cart, data.payload]
        },
        removeFromCart: (state) => {

        }
    }
})

export const { like, removeFromCart } = Likeslice.actions

export default Likeslice
