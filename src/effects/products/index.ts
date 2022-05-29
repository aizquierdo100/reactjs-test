import {PayloadAction} from "@reduxjs/toolkit";

import {AppDispatch} from "../../store";
import {IProduct} from "../../models";

const initialData: IProduct[] = [
    {
        id: 1,
        sku: 'E10U',
        name: 'Woman Blue Dress',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model1.jpg',
        price: 120000
    },
    {
        id: 2,
        sku: 'F21R',
        name: 'Blue mono',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model2.jpg',
        price: 80000
    },
    {
        id: 3,
        sku: 'V12P',
        name: 'Blue shorts',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model4.jpg',
        price: 95000
    },
    {
        id: 4,
        sku: 'C47R',
        name: 'Stripe dress',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model5.jpg',
        price: 300000
    },
    {
        id: 5,
        sku: 'V735',
        name: 'Red sweter',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
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
        }, 2000);
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
        }, 2000);
}