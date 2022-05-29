import React, {FC} from "react";

import Button from "../../atoms/Button/Button";
import Card from "../../atoms/Card/Card";
import Label from "../../atoms/Label/Label";
import Image from '../../atoms/Image/Image';
import {renderPrice} from "../../../utils";

interface IProps {
    image: string;
    alt: string;
    title: string;
    price: number;
    moreInfoHandler: () => void,
    addCartHandler: () => void
}

const ProductCard: FC<IProps> = ({image, alt, title, price,
                                     addCartHandler, moreInfoHandler}) => {
    return (
        <Card>
            <React.Fragment>
                <Image src={require(`../../../assets/images/products/${image}`)} alt={alt} />
                <div className='card-content'>
                    <Label className='card-title'>{title}</Label>
                    <Label className='card-subtitle'>{renderPrice(price)}</Label>
                    <div className='container container--between g--12'>
                        <Button onClick={moreInfoHandler}>More info</Button>
                        <Button onClick={addCartHandler}>Add to cart</Button>
                    </div>
                </div>
            </React.Fragment>
        </Card>
    )
}

export default ProductCard;
