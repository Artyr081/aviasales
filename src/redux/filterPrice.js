import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterId: 0,
}

export const filterPrice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterPrice(state, action) {
            state.filterId = action.payload;
        }
    }
})

export const { setFilterPrice } = filterPrice.actions;

export default filterPrice.reducer;