import React, {FC, ReactNode} from 'react';

import "./Button.scss";
import {ButtonType} from "../../../constants";


interface IProps {
    disabled?: boolean | null;
    children: ReactNode;
    onClick?: () => void | null;
    type?: ButtonType
}

const Button: FC<IProps> = ({disabled = false, onClick,
                                type = ButtonType.PRIMARY,
                                children}) => {
    let className = 'btn--raised';
    if(type === ButtonType.CART_ITEM){
        className = 'btn--float';
    }
    if(type === ButtonType.NAVIGATION){
        className = 'btn--flat';
    }
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={!!disabled}>{children}</button>
    )
}

export default Button;