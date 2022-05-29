import React, {FC, StrictMode} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {routes} from './routes';
import MainTemplate from './components/templates/main/Main';

const App: FC = () => {

    const renderRoutes = () => <Routes>
        <Route path='/' element={<MainTemplate/>}>
            {routes.map((x, i: number) => {
                return x.index
                    ? <Route key={i} index element={<x.element/>}/>
                    : <Route key={i} path={x.path} element={<x.element/>}/>;
            })}
        </Route>
  </Routes>

  return (
      <StrictMode>
        <BrowserRouter>
            {renderRoutes()}
        </BrowserRouter>
      </StrictMode>
  );
}

export default App;
