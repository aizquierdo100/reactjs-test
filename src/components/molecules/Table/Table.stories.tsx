import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import Label from "../../atoms/Label/Label";
import CartIndicator from '../CartIndicator/CartIndicator'
import { renderPrice } from "../../../utils";

export default {
    title: 'Components/Molecules/Table',
    component: Table,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
    const [quantity, setQuantity] = useState<number>(1)

    const [bodies, setBodies] = useState<any[]>([])

    const handleQuantity = (type: string) => {
        if (type === 'increase') {
            setQuantity(quantity => quantity + 1)
        } else if (type === 'decrease') {
            setQuantity(quantity => quantity - 1)
        }
    }

    useEffect(() => {
        setBodies([{
            'nameContent': <Label>123</Label>,
            'quantityContent': <CartIndicator
                quantity={quantity}
                increaseHandler={() => handleQuantity('increase')}
                decreaseHandler={() => handleQuantity('decrease')} />,
            'priceContent': <Label>{renderPrice(100000, quantity)}</Label>
        }])
    }, [quantity])


    return <Table {...args} bodies={bodies} />
}

export const BaseTable = Template.bind({});
BaseTable.args = {
    headers: ['Product name', 'Quantity', 'Price'],
};

