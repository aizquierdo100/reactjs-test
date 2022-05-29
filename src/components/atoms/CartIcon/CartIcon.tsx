import React, {FC} from 'react';

import './CartIcon.scss';

interface IProps {
    quantity: number
}

const CartIcon: FC<IProps> = ({quantity}) => {
    return (
        <div id="ex4">
          <span className="p1 fa-stack fa-2x has-badge" data-count="4">
              <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
          </span>
        </div>
    );
}

export default CartIcon;