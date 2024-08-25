import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import { pizzasApi } from '../services/pizzasapi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        cart:cartReducer,
        [pizzasApi.reducerPath]: pizzasApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzasApi.middleware)
})
setupListeners(store.dispatch)