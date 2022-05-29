import React, {FC} from 'react';

import CartIndicator from "../../molecules/CartIndicator/CartIndicator";
import Label from "../../atoms/Label/Label";
import '../../../assets/styles/cards_tiles.scss';
import '../../../assets/styles/grid.scss';
import Button from "../../atoms/Button/Button";
import '../../../assets/styles/utility.scss';
import {renderPrice} from "../../../utils";

export interface IProps {
    quantity: number;
    price: number;
    increaseHandler: () => void;
    decreaseHandler: () => void;
    addToCartHandler: () => void;
}

const SmallCartBox: FC<IProps> = ({quantity, price, increaseHandler,
                                      decreaseHandler, addToCartHandler}) => {
    const priceContent = `Price: ${renderPrice(price, quantity)}`;
    return (
        <div className='container container--evenly container--wrap--s'>
            <div className='g--6 g-s--12'>
                <Label className='inline card-subtitle'>{priceContent}</Label>
            </div>
            <div className='g--6 g-s--12'>
                <div className='card'>
                    <div className='container container--between'>
                        <div className='g--4'>
                            <Label className='mt-1'>Quantity</Label>
                        </div>
                        <div className='g--8'>
                            <CartIndicator
                                quantity={quantity}
                                increaseHandler={increaseHandler}
                                decreaseHandler={decreaseHandler}/>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='g--12'>
                            <Button
                                className='w-100'
                                onClick={addToCartHandler}>Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SmallCartBox.defaultProps = {
    quantity: 1
}

export default SmallCartBox;