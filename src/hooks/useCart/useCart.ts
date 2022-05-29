import {useAppSelector} from "../useAppSelector";
import {useAppDispatch} from "../useAppDispatch";
import {addItem, removeItem, emptyCart} from '../../store/slices';
import {ICartItem} from "../../models";

const useCart = () => {

    const {totalProducts, items} = useAppSelector((state) => state.cartState);
    const dispatch = useAppDispatch();

    const addCartItem = (item: ICartItem): void => {
        dispatch(addItem(item));
    }

    const removeCartItem = (item: ICartItem) => {
        dispatch(removeItem(item));
    }

    const selectedCount = (selectedItem: number) => {
        const foundItem = items.find(x => x.id === selectedItem);
        return foundItem ? foundItem.quantity : 0;
    }

    const cleanCart = () => {
        dispatch(emptyCart());
    }
    return {totalProducts, selectedCount, addCartItem, removeCartItem, cleanCart};
}

export default useCart;