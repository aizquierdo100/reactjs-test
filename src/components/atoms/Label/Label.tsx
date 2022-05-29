import React, {FC} from "react";

import '../../../assets/styles/type.scss';

interface IProps {
    className?: string;
    children: string;
}

const Label: FC<IProps> = ({className, children}) => {
    return (
        <p className={className}>{children}</p>
    )
}

export default Label;