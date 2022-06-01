import {PayloadAction, createSlice} from "@reduxjs/toolkit";

import {ICartItem, ICartState} from "../../models";

// Define the initial state using that type
export const initialState: ICartState = {
    items: [],
    totalProducts: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const index = state.items.findIndex(x => x.sku === action.payload.sku);
            if(index !== -1){
                state.items[index].quantity += action.payload.quantity;
                state.totalProducts += action.payload.quantity;
            }
            else{
                state.items.push(action.payload);
                state.totalProducts += action.payload.quantity;
            }
        },
        removeItem: (state, action: PayloadAction<ICartItem>) => {
            const foundIndex = state.items.findIndex(x => x.id === action.payload.id);
            if(foundIndex !== -1){
                if(state.items[foundIndex].quantity > 0){
                    state.items[foundIndex].quantity -= action.payload.quantity;
                    state.totalProducts -= action.payload.quantity;
                }
                else{
                    state.items.splice(foundIndex, 1);
                }
            }
        },
        emptyCart: (state) => {
            Object.assign(state, {
                items: [],
                totalProducts: 0
            });
        }
    },
});

export const {reducer: cartReducer} = cartSlice;

export const { addItem, removeItem, emptyCart } = cartSlice.actions
