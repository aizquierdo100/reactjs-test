import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {EffectStatus, IProduct} from "../../models";

interface IProductState {
    products: IProduct[];
    selected: IProduct | null;
    selectedError: string | null;
    productsError: string | null;
    productsStatus: EffectStatus;
    selectedStatus: EffectStatus;
}

// Define the initial state using that type
const initialState: IProductState = {
    products: [],
    selected: null,
    productsStatus: EffectStatus.LOADING,
    selectedError: null,
    selectedStatus: EffectStatus.LOADING,
    productsError: null
}

const productsSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setSelectedRequest: (state): void => {
            Object.assign(state, {
                selected: null,
                selectedStatus: EffectStatus.LOADING
            });
        },
        setProductsRequest: (state): void => {
            Object.assign(state, {
                selected: null,
                selectedStatus: EffectStatus.LOADING
            });
        },
        setSelectedSuccess: (state, action: PayloadAction<IProduct>): void => {
            Object.assign(state, {
                selected: action.payload,
                selectedStatus: EffectStatus.SUCCESS
            });
        },
        setProductsSuccess: (state, action: PayloadAction<IProduct[]>): void => {
            Object.assign(state, {
                products: action.payload,
                productsStatus: EffectStatus.SUCCESS
            });

        },
        setSelectedError: (state) => {
            Object.assign(state, {
                selectedStatus: EffectStatus.ERROR,
                selected: null
            })
        },
        setProductsError: (state) => {
            Object.assign(state, {
                status: EffectStatus.ERROR,
                products: []
            })
        }
    },
});

export const {reducer: productsReducer} = productsSlice;

export const { setSelectedSuccess, setProductsRequest, setProductsSuccess,
    setSelectedRequest, setProductsError, setSelectedError } = productsSlice.actions;