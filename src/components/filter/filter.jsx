import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterPrice } from '../../redux/filterPrice';


import style from './filter.module.scss';

export default function Filter() {
    const dispatch = useDispatch();
    const id = useSelector(state => state.filterPrice.filterId)

    const filter = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']
    let key = 0;

    const element = filter.map((item, index) => {
        let className = `${style.filter__button}`
        if (id === index) {
            className += ` ${style.active}`
        }

        return (
            <li className={style.filter__item} key={key++}>
                <button className={className} onClick={() => dispatch(setFilterPrice(index))}>{item}</button>
            </li>
        )
    }
    )

    return (
        <section className={style.filter}>
            <ul className={style.filter__list}>
                {element}
            </ul>
        </section>
    )   
}