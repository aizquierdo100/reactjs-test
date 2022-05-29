import React, {FC, useEffect} from 'react';

import ProductGrid from "../../organisms/ProductGrid/ProductGrid";
import {setHomeProdEffect} from "../../../effects/products";
import {setProducts} from '../../../store/slices';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from '../../../hooks/useAppSelector';

const Home:FC = () => {

    const {products} = useAppSelector((state) => state.productsState);
    const dispatch = useAppDispatch();

    const addCartHandler = () => {
        console.log('test');
    }

    useEffect(() => {
        setHomeProdEffect(dispatch)(setProducts);
    }, [])

    return (
       <section>
           <ProductGrid
               products={products}
               addCartHandler={addCartHandler}/>
       </section>
    )
}

export default Home;