import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import AppBar from "../../organisms/AppBar/AppBar";

import '../../../assets/styles/grid.scss';
import '../../../assets/styles/utility.scss';
import '../../../assets/styles/type.scss';


const MainTemplate: FC = () => {
    return (
        <main>
            <AppBar />
            <Outlet />
        </main>
    )
}

export default MainTemplate;