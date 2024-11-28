import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ticketsWindow } from '../../redux/selector';
import { setShowTickets } from '../../redux/fetchTickets';

import style from './show-more-button.module.scss';

export default function Show() {
    const dispatch = useDispatch();
    const tickets = useSelector(ticketsWindow);

    return (
        <section className={style.show}>
            {tickets >= 5 ? <button className={style.show__button} onClick={() => dispatch(setShowTickets())}>показать еще 5 билетов</button> : null}
        </section>
    )
}