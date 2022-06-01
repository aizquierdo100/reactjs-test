import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from './ProductCard';

export default {
    title: 'Components/Molecules/ProductCard',
    component: ProductCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <div className='g--3 g-m--4 g-s--12 fade-in-from-top'><ProductCard {...args} /></div>

export const BaseProductCard = Template.bind({});
BaseProductCard.args = {
    image: 'model2.jpg',
    alt: 'product',
    title: 'Blue mono',
    price: 300000,
    moreInfoHandler: () => {
        alert('Loading...')
    },
    addCartHandler: () => {
        alert('Add to cart')
    }
};

