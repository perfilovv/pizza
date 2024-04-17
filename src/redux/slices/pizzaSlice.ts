import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params: any) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get(
            `https://6614489d2fc47b4cf27c0ab5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        return data;
    }
);

export interface CartState {
    items: any;
    status: string;
}

const initialState: CartState = {
    items: [],
    status: '',
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success';
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
