import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallCartBox from './SmallCartBox';
import { EffectStatus } from "../../../models";
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Components/Molecules/SmallCartBox',
    component: SmallCartBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SmallCartBox>;

const Template: ComponentStory<typeof SmallCartBox> = (args) => <BrowserRouter><SmallCartBox {...args} /></BrowserRouter>

export const BaseSmallCartBox = Template.bind({});
BaseSmallCartBox.args = {
    quantity: 5,
    price: 300000,
    increaseHandler: () => { alert('increase') },
    decreaseHandler: () => { alert('decrease') },
    addToCartHandler: () => { alert('addToCart') },
};



