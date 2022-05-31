import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CartIndicator from './CartIndicator';

export default {
    title: 'Components/Molecules/CartIndicator',
    component: CartIndicator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CartIndicator>;

const Template: ComponentStory<typeof CartIndicator> = (args) => {
    const [quantity, setQuantity] = useState<number>(0)
    const increaseHandler = () => {
        setQuantity(current => current + 1)
    }

    const decreaseHandler = () => {
        setQuantity(current => current - 1)
    }
    return <CartIndicator {...args}
                          quantity={quantity}
                          increaseHandler={increaseHandler}
                          decreaseHandler={decreaseHandler} />
};

export const BaseCartIndicator = Template.bind({});
BaseCartIndicator.args = {
};

