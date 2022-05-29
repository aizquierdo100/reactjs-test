import React, {FC} from 'react';

import useCart from "../../../hooks/useCart/useCart";
import {ICartItem} from "../../../models";
import LargeCartBox from "../../organisms/LargeCartBox/LargeCartBox";

const Cart: FC = () => {
    const {items, addCartItem, removeCartItem} = useCart();

    const addOrIncreaseHandler = (toAdd: ICartItem) => {
        const cartItem: ICartItem = {...toAdd, quantity: 1};
        addCartItem(cartItem);
    }

    const removeOrDecreaseHandler = (toRemove: ICartItem) => {
        const cartItem: ICartItem = {...toRemove, quantity: 1};
        removeCartItem(cartItem);
    }
    return (
        <LargeCartBox
            items={items}
            increaseHandler={addOrIncreaseHandler}
            decreaseHandler={removeOrDecreaseHandler}/>
    )
}

export default Cart;