import React, {FC} from 'react';

import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import {ButtonType} from "../../../constants";
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/utility.scss';

interface IProps {
    quantity: number;
    increaseHandler: () => void;
    decreaseHandler: () => void;
}

const CartIndicator: FC<IProps> = ({quantity, increaseHandler, decreaseHandler}) => {
    return (
        <div className='container container--evenly'>
            <div className='container g--4 no-margin-vertical' style={{justifyContent: 'center'}}>
                <Button
                    disabled={quantity <= 0}
                    type={ButtonType.CART_ITEM}
                    onClick={decreaseHandler}>-</Button>
            </div>
            <div className='g--4 text-center'>
                <Label>{quantity}</Label>
            </div>
            <div className='container g--4 no-margin-vertical' style={{justifyContent: 'center'}}>
                <Button
                    type={ButtonType.CART_ITEM}
                    onClick={increaseHandler} >+</Button>
            </div>
        </div>
    )
}

export default CartIndicator;