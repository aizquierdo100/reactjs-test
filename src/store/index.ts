import { configureStore } from '@reduxjs/toolkit'

import {productsReducer, cartReducer} from './slices';

export const index = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
});

export type RootState = ReturnType<typeof index.getState>

export type AppDispatch = typeof index.dispatch