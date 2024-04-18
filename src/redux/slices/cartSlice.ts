import { createSlice } from '@reduxjs/toolkit';

export interface CartState {
    totalPrice: string | number;
    items: any;
}

const initialState: CartState = {
    totalPrice: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(
                (obj: any) => obj.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalPrice = state.items.reduce(
                (sum: number, obj: any) => obj.price * obj.count + sum,
                0
            );
        },

        minusItem(state, action) {
            const findItem = state.items.find(
                (obj: any) => obj.id === action.payload
            );

            if (findItem) {
                findItem.count--;
            }
        },

        removeItem(state, action) {
            state.items = state.items.filter(
                (obj: any) => obj.id !== action.payload
            );
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state: any) => state.cart;
export const selectCartItemById = (id: number) => (state: any) =>
    state.cart.items.find((obj: any) => obj.id === id);

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
