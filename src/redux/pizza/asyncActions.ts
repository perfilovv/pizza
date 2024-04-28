import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get<Pizza[]>(
            `https://6614489d2fc47b4cf27c0ab5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );

        return data;
    }
);
