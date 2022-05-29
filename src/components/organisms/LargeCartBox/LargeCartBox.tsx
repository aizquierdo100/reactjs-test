import React, {FC} from 'react';

import Label from "../../atoms/Label/Label";
import Table from "../../molecules/Table/Table";
import {ICartItem} from "../../../models";
import {renderPrice} from "../../../utils";
import '../../../assets/styles/type.scss';
import '../../../assets/styles/grid.scss';
import CartIndicator from "../../molecules/CartIndicator/CartIndicator";

interface IProps {
    items: ICartItem[];
    increaseHandler: (item: ICartItem) => void
    decreaseHandler: (item: ICartItem) => void
}

const LargeCartBox: FC<IProps> = ({items, increaseHandler, decreaseHandler}) => {
    const tableBodies = items.map(x => {
        const {name, price, quantity} = x;
        return {
            nameContent: <Label>{name}</Label>,
            quantityContent: <CartIndicator
                quantity={quantity}
                increaseHandler={() => increaseHandler(x)}
                decreaseHandler={() => decreaseHandler(x)}/>,
            priceContent: <Label>{renderPrice(price, quantity)}</Label>
        }
    });

    return (
        <div className='container direction--column px-3 text-center'>
            <Label className='title my-3'>Cart</Label>
            <Table
                headers={['Product name', 'Quantity', 'Price']}
                bodies={tableBodies}/>
        </div>
    );
};

export default LargeCartBox;