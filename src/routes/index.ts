import Home from "../components/pages/Home/Home";
import Detail from "../components/pages/Detail/Detail";
import Cart from "../components/pages/Cart/Cart";

export const routes = [
    {
        element: Home,
        index: true
    },
    {
        path: 'details/:id',
        element: Detail
    },
    {
        path: 'cart',
        element: Cart
    },
    {
        path: '*',
        element: Home
    }
];