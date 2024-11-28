import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: 0,
}

export const error = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            state.error += 1;
        }
    }
})

export const { setError } = error.actions;

export default error.reducer;