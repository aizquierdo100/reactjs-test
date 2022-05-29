import React, {FC} from 'react';

import '../../../assets/styles/media.scss';

interface IProps {
    src: string;
    alt: string;
}

const Image: FC<IProps> = ({src, alt}) => {
    return (
        <img
            src={src}
            className='img-card'
            alt="model1"/>
    )
}

export default Image;