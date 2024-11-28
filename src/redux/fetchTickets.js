import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { setError} from './error';

export const fetchSearchId = createAsyncThunk('aviasales/searchId', async () => {
    try{
        const id = await fetch('https://aviasales-test-api.kata.academy/search')
        if (!id.ok) {
            throw new Error(id.status)
        }

        const idJson = await id.json();
        return await idJson.searchId;
    } catch (err) {
        console.log('fetchSerachId', err)
    }
})
export const fetchTickets = createAsyncThunk('aviasales/searchTicketsList', async (key, {dispatch}) => {
    try{
        const ticketsList = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${key}`)
        if (!ticketsList.ok) {
            throw new Error(ticketsList.status)
        }

        return await ticketsList.json();
    } catch (err) {
        if (err.message === '500') {
            return;
        }
        dispatch(setError());
        
    }
})

const initialState = {
    tickets: [],
    searchId: null,
    toFetch: false,
    num: 0,
    showTickets: 5,
    loading: false,
    ticketsWindow: 0,
}

export const tickets = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setShowTickets(state, action) {
            state.showTickets += 5;
        },
        setTicketsWindow(state, action) {
            state.ticketsWindow = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchId.pending, (state, action) => {
            })
            .addCase(fetchSearchId.fulfilled, (state, action) => {
                state.searchId = action.payload;
            })
            .addCase(fetchSearchId.rejected, (state, action) => {
            })
            .addCase(fetchTickets.pending, (state, action) => {
                state.loading = true;
                if (action.payload === undefined) {
                    state.tickets = [...state.tickets];
                } else {
                    state.tickets = [...state.tickets, ...action.payload.tickets];
                }
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload === undefined) {
                    state.tickets = [...state.tickets];
                    state.num += 1
                } else if (action.payload.stop === false) {
                    state.tickets = [...state.tickets, ...action.payload.tickets];
                    state.toFetch = action.payload.stop;
                    state.num += 1
                }
            })
            
            .addCase(fetchTickets.rejected, (state, action) => {
                console.log('Была ошибка: fetchTickets');
            });
    }
})

export const { setShowTickets, setTicketsWindow } = tickets.actions;

export default tickets.reducer;
