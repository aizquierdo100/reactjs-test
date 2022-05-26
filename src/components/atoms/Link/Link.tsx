import React, {FC, ReactNode} from 'react';
import {Link as RouterLink, useResolvedPath, useMatch} from "react-router-dom";

import './Link.scss';

type IProps = {
    to: string;
    children: ReactNode,
    activeStyle?: {[index: string]: string},
    className?: string | undefined,
    classActive: string
}

const Link: FC<IProps> = ({to, className, classActive,
                              children}) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <RouterLink
            to={to}
            className={match ? classActive : className}>{children}</RouterLink>
    )
}

export default Link;