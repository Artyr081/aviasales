import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAll, setNoTransfers, setOneTransfer, setTwoTransfers, setThreeTransfers } from '../../redux/filterCountTransfer';

import style from './counttransfer.module.scss';

export default function counttransfer() {
    const dispatch = useDispatch();
    const all = useSelector(state => state.filterCountTransfer.all)
    const noTransfers = useSelector(state => state.filterCountTransfer.no_transfers)
    const onetransfer = useSelector(state => state.filterCountTransfer.one_transfer)
    const twotransfers = useSelector(state => state.filterCountTransfer.two_transfers)
    const threetransfers = useSelector(state => state.filterCountTransfer.three_transfers)
    
    return (
        <section className={style.counttransfer}>
            <h3 className={style.counttransfer__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
            <ul className={style.counttransfer__list}>
                <li className={style.counttransfer__item} onClick={() => dispatch(setAll(!all))}>
                    <input className={style.counttransfer__item_input} type="checkbox" id="all" checked={all} />
                    <label className={style.counttransfer__item_label} htmlFor="all" onClick={(e) => e.stopPropagation()}>Все</label>
                </li>
                <li className={style.counttransfer__item} onClick={() => dispatch(setNoTransfers(!noTransfers))}>
                    <input className={style.counttransfer__item_input} type="checkbox" id="no-transfers" checked={noTransfers} />
                    <label className={style.counttransfer__item_label} htmlFor="no-transfers" onClick={(e) => e.stopPropagation()}>Без пересадок</label>
                </li>
                <li className={style.counttransfer__item} onClick={() => dispatch(setOneTransfer(!onetransfer))}>
                    <input className={style.counttransfer__item_input} type="checkbox" id="one-transfer" checked={onetransfer} />
                    <label className={style.counttransfer__item_label} htmlFor="one-transfer" onClick={(e) => e.stopPropagation()}>1 пересадка</label>
                </li>
                <li className={style.counttransfer__item} onClick={() => dispatch(setTwoTransfers(!twotransfers))}>
                    <input className={style.counttransfer__item_input} type="checkbox" id="two-transfers" checked={twotransfers} />
                    <label className={style.counttransfer__item_label} htmlFor="two-transfers" onClick={(e) => e.stopPropagation()}>2 пересадки</label>
                </li>
                <li className={style.counttransfer__item} onClick={() => dispatch(setThreeTransfers(!threetransfers))}>
                    <input className={style.counttransfer__item_input} type="checkbox" id="three-transfers" checked={threetransfers} />
                    <label className={style.counttransfer__item_label} htmlFor="three-transfers" onClick={(e) => e.stopPropagation()}>3 пересадки</label>
                </li>
            </ul>
        </section>
    )
}