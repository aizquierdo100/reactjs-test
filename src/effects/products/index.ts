import {PayloadAction} from "@reduxjs/toolkit";

import {AppDispatch} from "../../store";
import {IProduct} from "../../models";

const initialData: IProduct[] = [
    {
        id: 1,
        sku: 'E10U',
        name: 'Woman Blue Dress',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'model1.jpg',
        price: 120000
    },
    {
        id: 2,
        sku: 'F21R',
        name: 'Blue mono',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'model2.jpg',
        price: 80000
    },
    {
        id: 3,
        sku: 'V12P',
        name: 'Blue shorts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'model4.jpg',
        price: 95000
    },
    {
        id: 4,
        sku: 'C47R',
        name: 'Stripe dress',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'model5.jpg',
        price: 300000
    },
    {
        id: 5,
        sku: 'V735',
        name: 'Red sweter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'model6.jpg',
        price: 400000
    }
]

export const getHomeProdEffect = (dispatch: AppDispatch)  =>
    (actionRequest: () => PayloadAction, actionError: () => PayloadAction,
     actionSuccess: (payload: IProduct[]) => PayloadAction<IProduct[]>): void => {
        //dispatch request
        dispatch(actionRequest());
        //Call to API here
        setTimeout(() => {
            //dispatch success or error in case some invalid data response
            dispatch(actionSuccess(initialData));
            //dispatch(actionError());
        }, 1000);
}

export const getProdDetailEffect = (dispatch: AppDispatch) =>
    (actionRequest: () => PayloadAction, actionError: () => PayloadAction,
     actionSuccess: (payload: IProduct) => PayloadAction<IProduct>, id: number): void => {
        //dispatch request
        dispatch(actionRequest());
        //Call to API here
        setTimeout(() => {
            //dispatch success or error in case some invalid data response
            const found = initialData.find(x => x.id === id);
            if(found)
                dispatch(actionSuccess(found));
            //dispatch(actionError());
        }, 1000);
}