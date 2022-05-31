import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from './Spinner';

export default {
    title: 'Components/Atoms/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const BaseSpinner = Template.bind({});
BaseSpinner.args = {
    height: `200px`,
    width: '200px'
};

