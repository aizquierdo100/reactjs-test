import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './Badge';

export default {
    title: 'Components/Atoms/Badge',
    component: Badge,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BaseBadge = Template.bind({});
BaseBadge.args = {
    value: 0,
};