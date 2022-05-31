import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
    title: 'Components/Atoms/Label',
    component: Label,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const BaseLabel = Template.bind({});
BaseLabel.args = {
    children: `Hi I'm Label`
};

