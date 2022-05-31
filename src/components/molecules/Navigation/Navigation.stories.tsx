import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Components/Molecules/Navigation',
    component: Navigation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <BrowserRouter><Navigation {...args} /></BrowserRouter>

export const BaseNavigation = Template.bind({});
BaseNavigation.args = {
    cartCount: 0
};

