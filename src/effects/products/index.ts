import {AppDispatch} from "../../store";
import {PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../models";

const initialData: IProduct[] = [
    {
        id: 1,
        name: 'Woman Blue Dress',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model1.jpg',
        price: '120,000 VND'
    },
    {
        id: 2,
        name: 'Blue mono',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model2.jpg',
        price: '80,000 VND'
    },
    {
        id: 3,
        name: 'Blue shorts',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model4.jpg',
        price: '95,000 VND'
    },
    {
        id: 4,
        name: 'Stripe dress',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model5.jpg',
        price: '300,000 VND'
    },
    {
        id: 5,
        name: 'Red sweter',
        description: 'Adfh fghjj gjgjghj ghjggjggh fh jh gjh jgjg',
        image: 'model6.jpg',
        price: '400,000 VND'
    }
]

export const setHomeProdEffect = (dispatch: AppDispatch)  =>
    (action: (payload: IProduct[]) => PayloadAction<IProduct[]>): void => {

        setTimeout(() => {
            dispatch(action(initialData));
        }, 2000);
}