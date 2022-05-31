import React, {FC, ReactElement} from 'react';

import './Card.scss';

interface IProps {
    children: ReactElement
}

const Card: FC<IProps> = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default Card;