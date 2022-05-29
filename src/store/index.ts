import { configureStore } from '@reduxjs/toolkit'

import {productsReducer, cartReducer} from './slices';

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        productsState: productsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch