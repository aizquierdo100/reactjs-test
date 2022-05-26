import React, {FC} from 'react';

import Button from "../../atoms/Button/Button";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import '../../../assets/styles/cards_tiles.scss';
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/type.scss';
import '../../../assets/styles/animations.scss';
import '../../../assets/styles/media.scss';

const Home:FC = () => {

    return (
       <section>
           <div className='container container--around container--wrap--m'>
               <div className='g--3 g-m--4 g-s--12 fade-in-from-top'>
                   <ProductCard />
               </div>
               <div className='g--3 g-m--4 g-s--12 fade-in-from-top'>
                   <ProductCard />
               </div>
               <div className='g--3 g-m--4 g-s--12 fade-in-from-top'>
                   <ProductCard />
               </div>
           </div>
       </section>
    )
}

export default Home;