import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

import ProductCard from "../../molecules/ProductCard/ProductCard";
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/animations.scss';
import {EffectStatus, IProduct} from "../../../models";
import {shuffle} from "../../../utils";

interface IProps {
    products: IProduct[],
    isLoading: EffectStatus
    addCartHandler: (id: number) => void;
}

const ProductGrid: FC<IProps> = ({products, isLoading, addCartHandler}) => {

    const navigate = useNavigate();

    const moreInfoHandler = (id: number): void => {
        navigate(`/details/${id}`);
    }

    const productsContent = isLoading ? products ? shuffle(products).slice(2).map((x) => {
        const product = x as IProduct;
        return (
            <React.Fragment key={product.id}>
                <div className='g--3 g-m--4 g-s--12 fade-in-from-top'>
                    <ProductCard
                        alt={product.name}
                        moreInfoHandler={() => moreInfoHandler(product.id)}
                        addCartHandler={() => addCartHandler(product.id)}
                        image={require(`../../../assets/images/products/${product.image}`)}
                        price={product.price}
                        title={product.name}/>
                </div>
            </React.Fragment>
        )
    }) : null : 'Loading';

    return (
        <div className='container container--around container--wrap--m'>
            {productsContent}
        </div>
    )
}

export default ProductGrid;