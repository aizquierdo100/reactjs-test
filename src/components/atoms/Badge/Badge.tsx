import React, {FC} from 'react';

import './Badge.scss';

interface IProps {
    value?: number;
}

const Badge: FC<IProps> = ({value}) => {
    return (
        <div className='badge mx-1'>{value}</div>
    );
};

Badge.defaultProps = {
    value: 0
}

export default Badge;