import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Components/Atoms/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <BrowserRouter><Link {...args} /></BrowserRouter>;

export const BaseLink = Template.bind({});
BaseLink.args = {
    children: `Hi I'm Link`,
    to: '/#',
    classActive: 'active'
};

