import React, {FC} from 'react';

import '../../../assets/styles/media.scss';

interface IProps {
    height?: string;
    width?: string;
}

const Spinner: FC<IProps> = ({height, width}) => {
    return <img
        src={require('../../../assets/images/spinner/spinner.gif')}
        alt='spinner'
        style={{height, width}}/>;
};

Spinner.defaultProps = {
    height: '60px',
    width: '60px'
}

export default Spinner;