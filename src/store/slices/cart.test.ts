import {cartReducer, emptyCart, removeItem, addItem, initialState} from './cart';
import {ICartState} from "../../models";

test('should return the initial state', () => {
    expect(cartReducer(undefined, {type: undefined})).toEqual(initialState)
})

test('should reset the state', () => {
    expect(cartReducer(initialState, emptyCart())).toEqual(initialState);
});

test('should add a cartItem', () => {
    const initialState: ICartState = {
        items: [{id: 1, sku: 'sa13', price: 12000, name: 'Blue Jacket', image: '12.png', quantity: 1}],
        totalProducts: 1
    }
   expect(cartReducer(initialState, addItem({id: 2, sku: '1ssa1', image: '21.jpg',
       price: 23000, name: 'Flowers', quantity: 1})));
});

test('should remove a cartItem', () => {
    const initialState: ICartState = {
        items: [{id: 1, sku: 'sa13', price: 12000, name: 'Blue Jacket', image: '12.png', quantity: 1},
            {id: 2, sku: '1ssa1', image: '21.jpg', price: 23000, name: 'Flowers', quantity: 1}],
        totalProducts: 1
    }
    expect(cartReducer(initialState, removeItem({id: 2, quantity: 1, sku: '1ssa1',
        image: '21.jpg', price: 23000, name: 'Flowers'})));
});



