import React from 'react';
import { useDispatch } from 'react-redux';

import { setShowTickets } from '../../redux/fetchTickets';

import style from './show-more-button.module.scss';

export default function Show() {
    const dispatch = useDispatch();

    return (
        <section className={style.show}>
            <button className={style.show__button} onClick={() => dispatch(setShowTickets())}>показать еще 5 билетов</button>
        </section>
    )
}