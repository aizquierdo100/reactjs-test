import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

import ProductCard from "../../molecules/ProductCard/ProductCard";
import Spinner from "../../atoms/Spinner/Spinner";
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/animations.scss';
import {EffectStatus, IProduct} from "../../../models";

interface IProps {
    products: IProduct[];
    status: EffectStatus;
    addCartHandler: (product: IProduct) => void;
}

const ProductGrid: FC<IProps> = ({products, status, addCartHandler}) => {

    const navigate = useNavigate();

    const moreInfoHandler = (id: number): void => {
        navigate(`/details/${id}`);
    }

    let productsContent = null;
    if(status === EffectStatus.LOADING){
        productsContent = Array(3).fill(1).map((_, i: number) => {
           return (
               <React.Fragment key={i}>
                   <div className='g--3 g-m--4 g-s--12'>
                       <Spinner />
                   </div>
               </React.Fragment>
           )
        });
    }
    else if(status === EffectStatus.SUCCESS){
        productsContent = products.map((x: IProduct) => {
            const product = x as IProduct;
            return (
                <React.Fragment key={product.id}>
                    <div className='g--3 g-m--4 g-s--12 fade-in-from-top'>
                        <ProductCard
                            alt={product.name}
                            moreInfoHandler={() => moreInfoHandler(product.id)}
                            addCartHandler={() => addCartHandler(product)}
                            image={product.image}
                            price={product.price}
                            title={product.name}/>
                    </div>
                </React.Fragment>
            )
        })
    }

    return (
        <div className='container justify--around container--wrap--m'>
            {productsContent}
        </div>
    )
}

export default ProductGrid;