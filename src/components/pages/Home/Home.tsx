import React, {FC, useEffect, useState} from 'react';

import ProductGrid from "../../organisms/ProductGrid/ProductGrid";
import {getHomeProdEffect} from "../../../effects/products";
import {setProductsSuccess, setProductsRequest, setProductsError} from '../../../store/slices';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from '../../../hooks/useAppSelector';
import {ICartItem, IProduct} from "../../../models";
import useCart from "../../../hooks/useCart/useCart";
import {shuffle} from "../../../utils";

const Home:FC = () => {

    const {products, productsStatus} = useAppSelector((state) => state.productsState);
    const [randomProducts, setRandomProducts] = useState<IProduct[]>([]);
    const [avoidShuffle, setAvoidShuffle] = useState(false);
    const dispatch = useAppDispatch();
    const {addCartItem} = useCart();

    const addCartHandler = (product: IProduct) => {
        const cartItem: ICartItem = {...product, quantity: 1};
        addCartItem(cartItem);
        setAvoidShuffle(true);
    }

    const selectRandomProducts = () => {
        const test = shuffle(products).splice(2) as IProduct[];
        setRandomProducts(test);
    }

    useEffect(() => {
        getHomeProdEffect(dispatch)(setProductsRequest, setProductsError, setProductsSuccess);
    }, []);

    useEffect(() => {
        if(!avoidShuffle){
            selectRandomProducts();
        }
    }, [products, avoidShuffle]);

    return (
       <section>
           <ProductGrid
               products={randomProducts}
               status={productsStatus}
               addCartHandler={addCartHandler}/>
       </section>
    )
}

export default Home;