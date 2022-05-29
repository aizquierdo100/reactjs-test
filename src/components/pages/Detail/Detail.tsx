import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import CartIndicator from "../../molecules/CartIndicator/CartIndicator";
import useCart from "../../../hooks/useCart/useCart";
import '../../../assets/styles/grid.scss';
import {ICartItem} from "../../../models";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getProdDetailEffect} from '../../../effects/products'
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setSelectedRequest, setSelectedSuccess, setSelectedError} from '../../../store/slices'
import SmallCartBox from "../../organisms/SmallCartBox/SmallCartBox";

const Detail: FC = () => {

    const {id} = useParams();
    const {selected, selectedStatus, selectedError} =
        useAppSelector((state) => state.productsState);
    const [count, setCount] = useState(0);
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
    if(id && selected?.price){
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
               <div className="g--7">
                   <div className='container container--between container--wrap--m'>
                       
                   </div>
               </div>
               <div className="g--5">
                   {smallCartContent}
               </div>
           </div>
       </section>
    )
}

export default Detail;