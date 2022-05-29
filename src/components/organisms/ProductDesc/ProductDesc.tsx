import React, {FC} from 'react';

import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import '../../../assets/styles/grid.scss';


interface IProps {
    image: string;
    name: string;
    description: string;
}

const ProductDesc: FC<IProps> = ({image, name, description}) => {
    return (
        <div className='container container--center container--wrap--m'>
            <div className='g--8'>
                <Image src={image} alt={name} zoom/>
            </div>
            <div className='g--8'>
                <Label>{name}</Label>
                <Label>{description}</Label>
            </div>
        </div>
    );
};

export default ProductDesc;