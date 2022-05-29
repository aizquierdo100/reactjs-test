import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import CartIndicator from "../../molecules/CartIndicator/CartIndicator";
import useCart from "../../../hooks/useCart/useCart";
import '../../../assets/styles/grid.scss';
import {ICartItem} from "../../../models";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getProdDetailEffect} from '../../../effects/products'
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {setSelectedRequest, setSelectedSuccess, setSelectedError} from '../../../store/slices'

const Detail: FC = () => {

    const {id} = useParams();
    const {selected, selectedStatus, selectedError} =
        useAppSelector((state) => state.productsState);
    const dispatch = useAppDispatch();
    const {selectedCount, addCartItem, removeCartItem} = useCart();

    const addOrIncreaseHandler = () => {
        if(selected){
            const cartItem: ICartItem = {...selected, quantity: 1};
            addCartItem(cartItem);
        }
    }

    const removeOrDecreaseHandler = () => {
        if(selected){
            const cartItem: ICartItem = {...selected, quantity: 1};
            removeCartItem(cartItem);
        }
    }

    let cartIndContent = null;
    if(id){
        cartIndContent = <CartIndicator
            quantity={selectedCount(parseInt(id))}
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
               <div className="g--8">
                   <div className='container container--between container--wrap--m'>

                   </div>
               </div>
               <div className="g--4">
                   {cartIndContent}
               </div>
           </div>
       </section>
    )
}

export default Detail;