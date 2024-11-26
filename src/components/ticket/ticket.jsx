import React from 'react';
import { add, format } from 'date-fns';

import style from './ticket.module.scss';

export default function Ticket({item}) {
    const { carrier, price, segments } = item;
    
    const stopsLength = (stops) => stops.length;
    // eslint-disable-next-line no-nested-ternary
    const stopsText = (stopsLEngth) => stopsLEngth === 1 ? 'пересадка' : stopsLEngth >= 2 && stopsLEngth <= 4 ? 'пересадки' : 'пересадок';
    const totalTiemHour = (duration) => Math.floor(duration / 60);
    const totalTiemMinutes = (duration) => Math.floor(duration % 60);
    const dateStart = (date) => format(date, 'HH:mm');
    const result = (date, duration) =>  add(date, { minutes: duration });
    const result1 = (results) => format(results, 'HH:mm');
    const transferCities = (stops) => stops.join(', ');
     
    return ( 
        <li className={style.card} key={`${segments[0].date} + ${segments[1].date}`}>
            <div className={style.card__position}>
                <span className={style.card__price}>{price} P</span>
                <img className={style.card__img} src={`//pics.avs.io/99/36/${carrier}.png`} alt='Логотип компании' />
            </div>
            {segments.map((segment) => {
                return (
                    <div className={style.card__section}>
                        <div className={style.card__section_one}>
                            <span className={style.card__text_grey}>{segment.origin} - {segment.destination}</span>
                            <span className={style.card__text_black}>{dateStart(segment.date)}-{result1(result(segment.date, segment.duration))}</span>
                        </div>
                        <div className={style.card__section_one}>
                            <span className={style.card__text_grey}>в пути</span>
                            <span className={style.card__text_black}>{totalTiemHour(segment.duration)}ч {totalTiemMinutes(segment.duration)}м</span>
                        </div>
                        <div className={style.card__section_one}>
                            <span className={style.card__text_grey}>{stopsLength(segment.stops)} {stopsText(stopsLength(segment.stops))}</span>
                            <span className={style.card__text_black}>{transferCities(segment.stops)}</span>
                        </div>
                    </div>
                )
            })}
        </li>
    )
}