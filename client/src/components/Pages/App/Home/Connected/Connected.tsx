import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays as isSameDay } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';

import style from './Connected.module.scss';

import Disconnect from '../Disconnect/Disconnect';
import { Store, useSelectorook } from '../../../../../utils/Redux/store';

const Connected: React.FC = () => {
  const user = useSelectorook((state: Store) => state.user);

  const [value, onChange] = useState(new Date());

  /** TODO: refactor this */
  const date1 = new Date();
  const date2 = new Date();
  const date3 = new Date();

  const events = [
    {
      date: new Date(date1.setDate(date1.getDate() + 11)),
      name: 'Having A Provocative Scoutisme Works Only Under These Conditions',
      tags: ['works', 'provocative'],
    },
    {
      date: new Date(date2.setDate(date2.getDate() + 5)),
      name: 'Fighting For Scoutisme: The Samurai Way',
      tags: ['fighting', 'samurai'],
    },
    {
      date: new Date(date3.setDate(date3.getDate() + 2)),
      name: 'If You Don\'t Scoutisme Now, You\'ll Hate Yourself Later',
      tags: ['yourself', 'hate'],
    }
  ];

  return !user.logged
    ? <Navigate to="/connexion" />
    : <>
      <Disconnect
        afterSwiper={
          <div className={ `${ style['Connected__afterSwiper'] }` }>
            <strong className={ `${ style['Connected__afterSwiper__title'] }` }>
              Les prochains événements
            </strong>
            <div className={ `${ style['Connected__afterSwiper__container'] } ` }>
              <FontAwesomeIcon icon={ faPlus } className={ `${ style['Connected__afterSwiper__container__add'] }` } />
              <Calendar
                className={ `${ style['Connected__afterSwiper__calendar'] } ` }
                onChange={ onChange }
                tileClassName={ ({ date, view }): any => {
                  if (view === 'month') {
                    if (events.find((
                      { date: eventDate }
                    ) => isSameDay(eventDate, date) === 0)) {
                      return `${ style['Connected__afterSwiper__calendar__event'] }`;
                    }
                  }
                } }
                value={ value }
              />
              { events && <div className={ `${ style['Connected__afterSwiper__items'] } ` }>
                { events.map(({ date, name, tags }) => <div
                  className={ `${ style['Connected__afterSwiper__item'] } ` }
                >
                  <div className={ `${ style['Connected__afterSwiper__item__tags'] } ` }>
                    { tags && tags.map((tag) => <span
                      className={ `${ style['Connected__afterSwiper__item__tag'] } ` }
                    >
                      { tag }
                    </span>) }
                  </div>
                  <strong className={ `${ style['Connected__afterSwiper__item__name'] } ` }>
                    { name }
                  </strong>
                  <span className={ `${ style['Connected__afterSwiper__item__date'] } ` }>
                    { date.toLocaleDateString() }
                  </span>
                </div>) }
              </div> }
            </div>
          </div>
        }
        afterEvent={
          <div className={ `${ style['Connected__afterEvent'] }` }>
            <button className={ `${ style['Connected__afterEvent__cta'] }` }>
              Laisser un message
            </button>
          </div>
        }
        classNameLastChild={ `${ style['Connected__lastChild'] }` }
      />
    </>;
};

export default Connected;
