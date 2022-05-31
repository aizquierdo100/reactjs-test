import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './Image';

export default {
    title: 'Components/Atoms/Image',
    component: Image,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const BaseImage = Template.bind({});
BaseImage.args = {
    src: require(`../../../assets/images/products/model1.jpg`),
    alt: 'product'
};

export const BaseImageWithAlt = Template.bind({});
BaseImageWithAlt.args = {
    src: 'some image',
    alt: 'product'
};
