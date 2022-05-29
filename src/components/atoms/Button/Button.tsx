import React, {FC, ReactNode} from 'react';

import "./Button.scss";
import {ButtonType} from "../../../constants";


interface IProps {
    disabled?: boolean | null;
    children: ReactNode;
    onClick?: () => void | null;
    type?: ButtonType,
    className?: string | null;
}

const Button: FC<IProps> = ({disabled = false, onClick,
                                type = ButtonType.PRIMARY, className,
                                children}) => {
    let classes = 'btn--raised';
    if(type === ButtonType.CART_ITEM){
        classes = 'btn--float';
    }
    if(type === ButtonType.TEXT){
        classes = 'btn--flat';
    }
    return (
        <button
            className={`${classes} ${className}`}
            onClick={onClick}
            disabled={!!disabled}>{children}</button>
    )
}

Button.defaultProps = {
    className: ''
}

export default Button;