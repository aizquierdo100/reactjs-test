import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface ICartState {
    totalProducts: number
    items: CartItem[],
}

// Define the initial state using that type
const initialState: ICartState = {
    items: [],
    totalProducts: 0
}

const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            Object.assign(state, {
                items: state.items.push({...action.payload}),
                totalProducts: state.totalProducts++
            });
        },
        updateItemCount: (state, action: PayloadAction<CartItem>) => {
            const foundIndex = state.items.findIndex(x => x.id === action.payload.id);
            Object.assign(state, {
                items: state.items[foundIndex].quantity += action.payload.quantity,
                totalProducts: state.totalProducts++
            });
        },
        removeItemCount: (state, action: PayloadAction<CartItem>) => {
            const foundIndex = state.items.findIndex(x => x.id === action.payload.id);
            Object.assign(state, {
                items: state.items[foundIndex].quantity -= action.payload.quantity,
                totalProducts: state.totalProducts--
            });
        },
        empty: (state) => {
            Object.assign(state, {
                items: [],
                totalProducts: 0
            });
        }
    },
});

export const {reducer: cartReducer} = cartSlice;

export const { addItem, removeItemCount, empty, updateItemCount } = cartSlice.actions
