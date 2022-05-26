import React, {FC} from 'react';

import Link from "../../atoms/Link/Link";
import '../../../assets/styles/lists.scss';
import '../../../assets/styles/type.scss';

const Navigation: FC = () => {

    return (
        <ul className='main-navigation'>
            <li><Link to="/" classActive='active'>Home</Link></li>
            <li><Link to="/cart" classActive='active'>Cart</Link></li>
        </ul>
    )
}

export default Navigation;