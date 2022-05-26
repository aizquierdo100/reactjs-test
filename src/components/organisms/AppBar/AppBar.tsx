import React, {FC} from 'react';

import Navigation from "../../molecules/Navigation/Navigation";
import './AppBar.scss';
import '../../../assets/styles/grid.scss';
import '../../../assets/styles/media.scss';
import logo from '../../../assets/images/logo/logo.png';

const AppBar: FC = () => {
    return (
        <header className="container container--between">
            <input type="checkbox" id="nav--horizontal-responsive"/>
            <label htmlFor="nav--horizontal-responsive" className='g-s--12'>MENU</label>
            <div className="nudge--left no-margin-vertical">
                <img src={logo} alt="logo" height={50}/>
            </div>
            <nav className="g--3 g-s--12 nav--horizontal">
                <Navigation />
            </nav>
        </header>
    )
}

export default AppBar;