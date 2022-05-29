import React, {FC} from 'react';

import '../../../assets/styles/media.scss';
import {convertToSlug} from "../../../utils";

interface IProps {
    src: string;
    alt: string;
    zoom?: boolean | null;
}

const Image: FC<IProps> = ({src, alt, zoom}) => {
    let imageContent = <img
        src={src}
        className='img-card'
        alt={alt}/>;
    if(zoom){
        {/*Could be a more elaborated id*/}
        const slug = convertToSlug(alt);
        imageContent = (
            <>
                <input type="checkbox" id={slug}/>
                <label htmlFor={slug}><img src={src} alt={alt} className='img-card'/></label>
            </>
        )
    }
    return imageContent;
}

Image.defaultProps = {
    zoom: false
}

export default Image;