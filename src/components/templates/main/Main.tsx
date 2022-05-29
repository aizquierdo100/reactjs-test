import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import AppBar from "../../organisms/AppBar/AppBar";
import '../../../assets/styles/utility.scss';

const MainTemplate: FC = () => {
    return (
        <>
            <AppBar />
            <main className='px-2'>
                <Outlet />
            </main>

        </>
    )
}

export default MainTemplate;