export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
}

export enum EffectStatus {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}
