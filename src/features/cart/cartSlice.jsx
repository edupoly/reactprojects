import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    cart:[]
}
var cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})
export var {addToCart} = cartSlice.actions
var cartReducer = cartSlice.reducer;
export default cartReducer;