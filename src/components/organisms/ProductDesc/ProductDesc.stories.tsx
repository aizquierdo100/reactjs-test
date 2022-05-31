import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductDesc from './ProductDesc';

export default {
    title: 'Components/Molecules/ProductDesc',
    component: ProductDesc,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductDesc>;

const Template: ComponentStory<typeof ProductDesc> = (args) => <ProductDesc {...args} />

export const BaseProductDesc = Template.bind({});
BaseProductDesc.args = {
    image: 'model1.jpg',
    name: 'Stripe dress',
    description: 'Description'
};

