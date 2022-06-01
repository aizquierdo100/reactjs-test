import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductGrid from './ProductGrid';
import { EffectStatus } from "../../../models";
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Components/Organisms/ProductGrid',
    component: ProductGrid,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductGrid>;

const Template: ComponentStory<typeof ProductGrid> = (args) => <BrowserRouter><ProductGrid {...args} /></BrowserRouter>

export const ProductGridSuccess = Template.bind({});
ProductGridSuccess.args = {
    products: [{
        id: 4,
        sku: "C47R",
        name: "Stripe dress",
        description: 'Description',
        image: "model5.jpg",
        price: 300000,
    }],
    status: EffectStatus.SUCCESS,
    addCartHandler: () => {
        alert('add to cart')
    }
};

export const ProductGridError = Template.bind({});
ProductGridError.args = {
    products: [{
        id: 4,
        sku: "C47R",
        name: "Stripe dress",
        description: 'Description',
        image: "model5.jpg",
        price: 300000,
    }],
    status: EffectStatus.ERROR,
    addCartHandler: () => {
        alert('add to cart')
    }
};

export const ProductGridLoading = Template.bind({});
ProductGridLoading.args = {
    products: [{
        id: 4,
        sku: "C47R",
        name: "Stripe dress",
        description: 'Description',
        image: "model5.jpg",
        price: 300000,
    }],
    status: EffectStatus.LOADING,
    addCartHandler: () => {
        alert('add to cart')
    }
};


