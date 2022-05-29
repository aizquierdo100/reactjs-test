export interface IProduct {
    id: number;
    sku: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export interface ICartItem{
    id: number;
    sku: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface ICartState {
    totalProducts: number
    items: ICartItem[],

}

export enum EffectStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}
