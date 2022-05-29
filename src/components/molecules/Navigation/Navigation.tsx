import React, {FC} from 'react';

import Link from "../../atoms/Link/Link";
import Badge from "../../atoms/Badge/Badge";
import '../../../assets/styles/lists.scss';
import '../../../assets/styles/type.scss';

interface IProps {
    cartCount?: number | null;
}

const Navigation: FC<IProps> = ({cartCount}) => {
    const cartNav = cartCount ? (
        <>
            Cart
            <Badge value={cartCount}/>
        </>
    ) : 'Cart';
    return (
        <ul className='main-navigation'>
            <li><Link to="/" classActive='active'>Home</Link></li>
            <li><Link to="/cart" classActive='active'>{cartNav}</Link></li>
        </ul>
    )
}

Navigation.defaultProps = {
    cartCount: 0
}

export default Navigation;