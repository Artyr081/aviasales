import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';

import Ticket from '../ticket/index';

import style from './ticketsList.module.scss';

export default function Tickets() {
    const tickets = useSelector(state => state.tickets.tickets);
    const filterId = useSelector(state => state.filterPrice.filterId);

    const allTransfers = useSelector(state => state.filterCountTransfer.all);
    const noTransfers = useSelector(state => state.filterCountTransfer.no_transfers);
    const oneTransfer = useSelector(state => state.filterCountTransfer.one_transfer);
    const twoTransfers = useSelector(state => state.filterCountTransfer.two_transfers);
    const threeTransfers = useSelector(state => state.filterCountTransfer.three_transfers);

    const showTickets = useSelector(state => state.tickets.showTickets);
    const loading = useSelector(state => state.tickets.loading);
    
    const filterTransfers = (items) => {
        return items.filter((transfer) => {
            if (allTransfers) {
                return true;
            } else if (noTransfers && transfer.segments[0].stops.length === 0 && transfer.segments[1].stops.length === 0) {
                return true;
            } else if (oneTransfer && (transfer.segments[0].stops.length === 1 || transfer.segments[1].stops.length === 1)) {
                return true;
            } else if (twoTransfers && (transfer.segments[0].stops.length === 2 || transfer.segments[1].stops.length === 2)) {
                return true;
            } else if (threeTransfers && (transfer.segments[0].stops.length === 3 || transfer.segments[1].stops.length === 3)) {
                return true;
            }
            return false;
        });
    };
    const filterPrice = (filterIds) => {
        const str = filterTransfers(tickets);

        if (filterIds === 0) {
            return str.sort((a,b) => a.price > b.price ? 1 : -1)
        } else if (filterIds === 1) {
            return str.sort((a,b) => a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1)
        } else if (filterIds === 2) {
            return str.sort((a,b) => a.price /  a.segments[0].duration + a.segments[1].duration > b.price / b.segments[0].duration + b.segments[1].duration ? 1 : -1)
        }
    }


    const element = filterPrice(filterId).map((item) => <Ticket item={item} key={`${item.price} ${item.segments[0].duration}`}/>)
    const ticket = element.splice(0, showTickets);
    
    return (
        <ul className={style.cards__list}>
            {loading && <Spin className={style.cards__spin} /> }
            {ticket.length === 0 ? <Alert className={style.cards__alert} message='Рейсов, подходящих под заданные фильтры, не найдено' type='info' showIcon /> : ticket}
        </ul>
    )
}