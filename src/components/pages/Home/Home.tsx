import React, {FC, useEffect} from 'react';

import ProductGrid from "../../organisms/ProductGrid/ProductGrid";
import {getHomeProdEffect} from "../../../effects/products";
import {setProductsSuccess, setProductsRequest, setProductsError} from '../../../store/slices';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from '../../../hooks/useAppSelector';

const Home:FC = () => {

    const {products, productsStatus} = useAppSelector((state) => state.productsState);
    const dispatch = useAppDispatch();

    const addCartHandler = () => {
        console.log('test');
    }

    useEffect(() => {
        getHomeProdEffect(dispatch)(setProductsRequest, setProductsError, setProductsSuccess);
    }, [])

    return (
       <section>
           <ProductGrid
               products={products}
               isLoading={productsStatus}
               addCartHandler={addCartHandler}/>
       </section>
    )
}

export default Home;