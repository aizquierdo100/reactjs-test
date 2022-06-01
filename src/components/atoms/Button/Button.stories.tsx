import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonType } from "../../../constants";
import Button from './Button';

export default {
    title: 'Components/Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimaryDisabled = Template.bind({});
ButtonPrimaryDisabled.args = {
    disabled: true,
    children: 'Disabled',
    type: ButtonType.PRIMARY,
};

export const ButtonPrimaryEnabled = Template.bind({});
ButtonPrimaryEnabled.args = {
    disabled: false,
    children: 'Click me',
    onClick: () => {
        alert('Clicked')
    },
    type: ButtonType.PRIMARY
};

export const ButtonTypeText = Template.bind({});
ButtonTypeText.args = {
    disabled: false,
    children: 'Click me',
    onClick: () => {
        alert('Clicked')
    },
    type: ButtonType.TEXT
};

export const ButtonTypeCart = Template.bind({});
ButtonTypeCart.args = {
    disabled: false,
    children: '+',
    onClick: () => {
        alert('Clicked')
    },
    type: ButtonType.CART_ITEM
};