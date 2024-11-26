import { configureStore  } from '@reduxjs/toolkit';

import filterPrice from './filterPrice';
import filterCountTransfer from './filterCountTransfer';
import tickets from './fetchTickets';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
    reducer: {
        filterPrice,
        filterCountTransfer,
        tickets
    },
})