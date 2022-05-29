import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IProduct} from "../../models";

interface IProductState {
    products: IProduct[]
}

// Define the initial state using that type
const initialState: IProductState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>): void => {
            Object.assign(state, {
                products: action.payload,
            });
        }
    },
});

export const {reducer: productsReducer} = productsSlice;

export const { setProducts } = productsSlice.actions