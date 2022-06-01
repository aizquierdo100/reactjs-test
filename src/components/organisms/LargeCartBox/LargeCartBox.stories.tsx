import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LargeCartBox from './LargeCartBox';

export default {
    title: 'Components/Organisms/LargeCartBox',
    component: LargeCartBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LargeCartBox>;

const Template: ComponentStory<typeof LargeCartBox> = (args) => <LargeCartBox {...args} />

export const BaseLargeCartBox = Template.bind({});
BaseLargeCartBox.args = {
    items: [{
        id: 4,
        image: "model5.jpg",
        name: "Stripe dress",
        price: 300000,
        quantity: 1,
        sku: "C47R",

    }],
    increaseHandler: () => { alert('increase') },
    decreaseHandler: () => { alert('decrease') }
};