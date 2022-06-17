import React, { useEffect, useState } from 'react';
import { differenceInCalendarDays as isSameDay } from 'date-fns';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import style from './Agenda.module.scss';

import Container from '../../../Atoms/Container/Container';
import PageTitle from '../../../Atoms/Title/Page/PageTitle';
import { all } from '../../../../utils/Request/eventequest';
import toast from '../../../../utils/Toast/default';

const Agenda: React.FC = () => {
  const [value, onChange] = useState(new Date());

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    all()
      .then((result) => {
        setEvents(result.data['hydra:member']);
      })
      .catch(() => {
        toast('La récupération des événements a échoué.', 'error');
      })
    ;
  }, []);

  return <>
    <Container
      className={ `${ style['Agenda__container__title'] } ` }
    >
      <PageTitle children="Agenda" />
    </Container>
    <Container
      className={ `${ style['Agenda__container__calendar'] } ` }
    >
      <Calendar
        className={ `${ style['Agenda__afterSwiper__calendar'] } ` }
        onChange={ onChange }
        tileClassName={ ({ date, view }): any => {
          if (view === 'month') {
            if (events.find((
              {
                endDate: end,
                startDate: start,
              }
            ) => (date > new Date(start) && date < new Date(end)))) {
              return `${ style['Agenda__afterSwiper__calendar__event'] }`;
            }
          }
        } }
        value={ value }
      />
      { events && <div className={ `${ style['Agenda__afterSwiper__items'] } ` }>
        <strong
          className={ `${ style['Agenda__afterSwiper__items__title'] } ` }
        >
          Liste des événements
        </strong>
        { events.map(({ id, startDate, endDate, title }) => <div
          className={ `${ style['Agenda__afterSwiper__item'] } ` }
          key={ id }
        >
          <strong className={ `${ style['Agenda__afterSwiper__item__name'] } ` }>
            { title }
          </strong>
          <span className={ `${ style['Agenda__afterSwiper__item__date'] } ` }>
            {
              new Date(startDate).toLocaleDateString()
              + ' au '
              + new Date(endDate).toLocaleDateString()
            }
          </span>
        </div>) }
      </div> }
    </Container>
  </>;
};

export default Agenda;
