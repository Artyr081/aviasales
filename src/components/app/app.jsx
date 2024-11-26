import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchId, fetchTickets } from '../../redux/fetchTickets';
import logo from '../images/Logo.svg';
import Filter from '../filter/index';
import Counttransfer from '../counttransfer/index';
import Tickets from '../tickets-list/index';
import Show from '../show/index';

import style from './app.module.scss';

export default function App() {
    const searchId = useSelector(state => state.tickets.searchId);
    const toFetch = useSelector(state => state.tickets.toFetch);
    const num = useSelector(state => state.tickets.num);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearchId());
    }, []);

    useEffect(() => {
        if (!toFetch && searchId) {
            dispatch(fetchTickets(searchId));
        }
    }, [searchId, toFetch, num])

    return (
        <div className={style.body}>
            <header className={style.header}>
                <img className={style.header__img} src={logo} alt='логотип сайта'/>
            </header>
            <main>
                <div className={style.fixed}>
                    <Filter />
                    <Counttransfer />
                </div>
                <Tickets />
                <Show />
            </main>
        </div>
    )
}