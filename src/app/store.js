import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pizzaApi } from "../services/pizzaApi";
import { dessertApi } from "../services/dessertApi";


const store = configureStore({
    reducer: {
        cart:cartReducer,
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        [dessertApi.reducerPath]:dessertApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware,dessertApi.middleware)
})
setupListeners(store.dispatch)
export default store