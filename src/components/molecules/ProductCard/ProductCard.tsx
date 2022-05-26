import React, {FC} from "react";
import Button from "../../atoms/Button/Button";

const ProductCard: FC = () => {
    return (
        <div className='card'>
            <img
                src={require('../../../assets/images/products/model1.jpg')}
                className='img-card'
                alt="model1"/>
            <div className='card-content'>
                <p className='card-title'>Woman blue dress</p>
                <p className='card-subtitle'>120,000 VND</p>
                <div className='container container--between g--12'>
                    <Button>More info</Button>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
