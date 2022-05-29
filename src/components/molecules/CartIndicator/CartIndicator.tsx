import React, {FC} from 'react';

import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import {ButtonType} from "../../../constants";
import '../../../assets/styles/grid.scss';


interface IProps {
    quantity: number;
    increaseHandler: () => void;
    decreaseHandler: () => void;
}

const CartIndicator: FC<IProps> = ({quantity, increaseHandler, decreaseHandler}) => {
    return (
        <div className='container container--evenly g--12'>
            <div className='g--4'>
                <Button
                    disabled={quantity <= 0}
                    type={ButtonType.CART_ITEM}
                    onClick={decreaseHandler}>-</Button>
            </div>
            <div className='g--4'>
                <Label>{quantity}</Label>
            </div>
            <div className='g--4'>
                <Button
                    type={ButtonType.CART_ITEM}
                    onClick={increaseHandler} >+</Button>
            </div>
        </div>
    )
}

export default CartIndicator;