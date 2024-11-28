export const selectSearchId = state => state.tickets.searchId;
export const selectToFetch = state => state.tickets.toFetch;
export const selectNum = state => state.tickets.num;
export const selectId = state => state.filterPrice.filterId;
export const selectError = state => state.error.error;

export const selectTickets = state => state.tickets.tickets;
export const selectFilterId = state => state.filterPrice.filterId;

export const selectAllTransfers = state => state.filterCountTransfer.all;
export const selectNoTransfers = state => state.filterCountTransfer.no_transfers;
export const selectOneTransfer = state => state.filterCountTransfer.one_transfer;
export const selectTwoTransfers = state => state.filterCountTransfer.two_transfers;
export const selectThreeTransfers = state => state.filterCountTransfer.three_transfers;

export const selectShowTickets = state => state.tickets.showTickets;
export const selectLoading = state => state.tickets.loading;

export const ticketsWindow = state => state.tickets.ticketsWindow;