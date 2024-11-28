import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';

import { fetchSearchId, fetchTickets } from '../../redux/fetchTickets';
import { selectError, selectSearchId, selectToFetch, selectNum } from '../../redux/selector';
import logo from '../images/Logo.svg';
import Filter from '../filter/index';
import Counttransfer from '../counttransfer/index';
import Tickets from '../tickets-list/index';
import Show from '../show/index';

import style from './app.module.scss';

export default function App() {
    const searchId = useSelector(selectSearchId);
    const toFetch = useSelector(selectToFetch);
    const num = useSelector(selectNum);
    const error = useSelector(selectError);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSearchId());
    }, []);

    useEffect(() => {
        if (!toFetch && searchId && error <= 3) {
            dispatch(fetchTickets(searchId));
        }
    }, [searchId, toFetch, num])

    return (
        <div className={style.body}>
            <header className={style.header}>
                <img className={style.header__img} src={logo} alt='логотип сайта'/>
            </header>
            <main>
                {error > 3 && <Alert className={style.alert} message='Отсутствует интернет соединение, попробуйте позже' type='info' showIcon />}
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