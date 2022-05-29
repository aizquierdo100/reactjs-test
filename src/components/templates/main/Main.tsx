import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import AppBar from "../../organisms/AppBar/AppBar";
import '../../../assets/styles/utility.scss';
import {useAppSelector} from "../../../hooks/useAppSelector";

const MainTemplate: FC = () => {

    const {totalProducts} = useAppSelector((state) => state.cartState);

    return (
        <>
            <AppBar cartCount={totalProducts}/>
            <main className='px-2'>
                <Outlet />
            </main>

        </>
    )
}

export default MainTemplate;