import React, {FC} from 'react';

import CartIndicator from "../../molecules/CartIndicator/CartIndicator";
import Label from "../../atoms/Label/Label";
import '../../../assets/styles/cards_tiles.scss';

export interface IProps {
    quantity: number;
    price: number;
    increaseHandler: () => void;
    decreaseHandler: () => void;
}

const SmallCartBox: FC<IProps> = ({quantity, price, increaseHandler, decreaseHandler}) => {
    return (
        <div className=''>
            <div className='g--4 '>
                <Label>Price: </Label>
                <Label>{quantity * price}</Label>
            </div>
            <div className=''>
                <div className='card'>
                    <div className='container container--between'>
                        <div className='g--4'>
                            <Label>Quantity</Label>
                        </div>
                        <div className='g--8'>
                            <CartIndicator
                                quantity={quantity}
                                increaseHandler={increaseHandler}
                                decreaseHandler={decreaseHandler}/>
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