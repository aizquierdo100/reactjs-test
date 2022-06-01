import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppBar from './AppBar';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Components/Organisms/AppBar',
    component: AppBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <BrowserRouter><AppBar {...args} /></BrowserRouter>

export const BaseAppBar = Template.bind({});
BaseAppBar.args = {
    cartCount: 3
};