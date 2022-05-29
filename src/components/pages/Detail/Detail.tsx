import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import ProductDesc from "../../organisms/ProductDesc/ProductDesc";
import useCart from "../../../hooks/useCart/useCart";
import '../../../assets/styles/grid.scss';
import {EffectStatus, ICartItem} from "../../../models";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getProdDetailEffect} from '../../../effects/products'
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setSelectedError, setSelectedRequest, setSelectedSuccess} from '../../../store/slices'
import SmallCartBox from "../../organisms/SmallCartBox/SmallCartBox";

const Detail: FC = () => {

    const {id} = useParams();
    const {selected, selectedStatus} =
        useAppSelector((state) => state.productsState);
    const [count, setCount] = useState(1);
    const dispatch = useAppDispatch();
    const {addCartItem} = useCart();

    const addOrIncreaseHandler = () => {
        setCount((prevState) => prevState + 1);
/*        if(selected){
            const cartItem: ICartItem = {...selected, quantity: 1};
            addCartItem(cartItem);
        }*/
    }

    const removeOrDecreaseHandler = () => {
        setCount((prevState) => prevState - 1);
    }

    const addToCartHandler = () => {
        if(selected){
            const cartItem: ICartItem = {...selected, quantity: count};
            addCartItem(cartItem);
        }
    }

    let smallCartContent = null;
    let details = null;
    let message = null;
    if(selectedStatus === EffectStatus.LOADING){
        message = 'LOADING';
    }
    else if(selectedStatus === EffectStatus.ERROR){
        message = 'ERROR MESSAGE';
    }
    else if(selected) {
        message = null;
        details = <ProductDesc
            image={selected.image}
            name={selected.name}
            description={selected.description}/>;
        smallCartContent = <SmallCartBox
            price={selected.price}
            quantity={count}
            addToCartHandler={addToCartHandler}
            increaseHandler={addOrIncreaseHandler}
            decreaseHandler={removeOrDecreaseHandler}/>;
    }

    useEffect(() => {
        if(id){
            getProdDetailEffect(dispatch)(setSelectedRequest, setSelectedError,
                setSelectedSuccess, parseInt(id));
        }
    }, [id]);

    return (
       <section>
           <div className="container container--evenly container--wrap--m">
               <div className="g--6 g-m--12">
                   <div className='container container--between container--wrap--m'>
                       {message}
                       {details}
                   </div>
               </div>
               <div className="g--5 g-m--12">
                   {message}
                   {smallCartContent}
               </div>
           </div>
       </section>
    )
}

export default Detail;