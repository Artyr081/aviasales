import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    all: true,
    no_transfers: true,
    one_transfer: true,
    two_transfers: true,
    three_transfers: true,
}

export const filterCountTransfer = createSlice({
    name: 'filterCountTransfer',
    initialState,
    reducers: {
        setAll(state, action) {
            const value = action.payload;

            state.all = value;
            state.no_transfers = value;
            state.one_transfer = value;
            state.two_transfers = value;
            state.three_transfers = value;
        },
        setNoTransfers(state, action) {
            const value = action.payload;
            state.no_transfers = value;

            if (!value) {
                state.all = value;
            }

            if (value && state.one_transfer && state.two_transfers && state.three_transfers) {
                state.all = value;
            }
        },
        setOneTransfer(state, action) {
            const value = action.payload;
            state.one_transfer = value;

            if (!value) {
                state.all = value;
            }

            if (value && state.no_transfers && state.two_transfers && state.three_transfers) {
                state.all = value;
            }
        },
        setTwoTransfers(state, action) {
            const value = action.payload;
            state.two_transfers = value;

            if (!value) {
                state.all = value;
            }

            if (value && state.no_transfers && state.one_transfer && state.three_transfers) {
                state.all = value;
            }
        },
        setThreeTransfers(state, action) {
            const value = action.payload;
            state.three_transfers = value;

            if (!value) {
                state.all = value;
            }

            if (value && state.no_transfers && state.one_transfer && state.two_transfers) {
                state.all = value;
            }
        }
    }
})

export const { setAll, setNoTransfers, setOneTransfer, setTwoTransfers, setThreeTransfers } = filterCountTransfer.actions;

export default filterCountTransfer.reducer;