import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays as isSameDay } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';

import style from './Connected.module.scss';

import Disconnect from '../Disconnect/Disconnect';
import { Store, useSelectorook } from '../../../../../utils/Redux/store';
import { all } from '../../../../../utils/Request/eventequest';
import toast from '../../../../../utils/Toast/default';

const Connected: React.FC = () => {
  const user = useSelectorook((state: Store) => state.user);

  const [value, onChange] = useState(new Date());

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    all()
      .then((result) => {
        setEvents(result.data['hydra:member'].slice(0, 4));
      })
      .catch(() => {
        toast('La récupération des événements a échoué.', 'error');
      })
    ;
  }, []);

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
                      {
                        endDate: end,
                        startDate: start,
                      }
                    ) => (date > new Date(start) && date < new Date(end)))) {
                      return `${ style['Connected__afterSwiper__calendar__event'] }`;
                    }
                  }
                } }
                value={ value }
              />
              { events && <div className={ `${ style['Connected__afterSwiper__items'] } ` }>
                { events.map(({ id, startDate, endDate, title }) => <div
                  className={ `${ style['Connected__afterSwiper__item'] } ` }
                  key={ id }
                >
                  <strong className={ `${ style['Connected__afterSwiper__item__name'] } ` }>
                    { title }
                  </strong>
                  <span className={ `${ style['Connected__afterSwiper__item__date'] } ` }>
                    {
                      new Date(startDate).toLocaleDateString()
                      + ' au '
                      + new Date(endDate).toLocaleDateString()
                    }
                  </span>
                </div>) }
              </div> }
              <Link
                className={ `${ style['Connected__afterSwiper__seeAll'] } ` }
                to="/agenda"
              >
                Voir tout
              </Link>
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
