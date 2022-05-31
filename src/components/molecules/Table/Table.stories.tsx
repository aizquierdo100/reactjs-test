import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import Label from "../../atoms/Label/Label";
import CartIndicator from '../CartIndicator/CartIndicator'

export default {
    title: 'Components/Molecules/Table',
    component: Table,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const BaseTable = Template.bind({});
BaseTable.args = {
    headers: ['Product name', 'Quantity', 'Price'],
    bodies: [{
        'nameContent': <Label>123</Label>,
        'quantityContent': <CartIndicator
            quantity={3}
            increaseHandler={() => alert("increase")}
            decreaseHandler={() => alert("decrease")} />,
        'priceContent': <Label>100,000</Label>
    }]
};

