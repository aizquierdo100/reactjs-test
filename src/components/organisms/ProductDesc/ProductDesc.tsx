import React, {FC} from 'react';

import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/type.scss';

interface IProps {
    image: string;
    name: string;
    description: string;
}

const ProductDesc: FC<IProps> = ({image, name, description}) => {
    return (
        <div className='container container--wrap--m'>
            <div className='g--8 g-m--12'>
                <Image src={require(`../../../assets/images/products/${image}`)} alt={name} />
            </div>
            <div className='g--4 g-m--12'>
                <Label className='mb-2 title'>{name}</Label>
                <Label>{description}</Label>
            </div>
        </div>
    );
};

export default ProductDesc;