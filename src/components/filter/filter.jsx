import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectId } from '../../redux/selector'; 
import { setFilterPrice } from '../../redux/filterPrice';


import style from './filter.module.scss';

export default function Filter() {
    const dispatch = useDispatch();
    const id = useSelector(selectId);

    const filter = [
        { id: 1, name: 'Самый дешевый'}, 
        { id: 2, name: 'Самый быстрый'}, 
        { id: 3, name: 'Оптимальный'},
    ]

    const element = filter.map((item, index) => {
        let className = `${style.filter__button}`
        if (id === index) {
            className += ` ${style.active}`
        }

        return (
            <li className={style.filter__item} key={item.id}>
                <button className={className} onClick={() => dispatch(setFilterPrice(index))}>{item.name}</button>
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