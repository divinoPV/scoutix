import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';

import Container from '../../../../Atoms/Container/Container';
import Table from '../../../../Organisms/Global/Table/Table';
import toast from '../../../../../utils/Toast/default';
import {
  add,
  available,
  update
} from '../../../../../utils/Request/event_categorequest';

interface EventCategory {
  [key: string]: string | number;
}

const EventCategory: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  const [categories, setCategories] = React.useState<any[]>([]);

  useEffect(() => {
    available()
      .then((result: AxiosResponse) => {
        setCategories(result.data['hydra:member']);
        setIsFetching(false);
      })
      .catch((e) => {
        console.log(e);
        toast('La récupération des événements catégories a échouée', 'error');
      })
    ;
  }, []);

  return <>
    <Container>
      { !isFetching ? <Table table={ {
        title: 'Mes catégories d\'évènements',
        columns: [
          { title: 'Titre', field: 'title' },
          { title: 'Contenu', field: 'content' },
        ],
        rows: categories,
        editable: {
          onRowUpdate: (
            eventCategory: object,
            oldEventCategory: { id: number }
          ): void => {
            update(oldEventCategory.id, eventCategory)
              .catch(() => {
                toast(
                  'La mise à jour de l\'événement catégorie a échouée',
                  'error'
                );
              })
            ;
          },
          onRowDelete: (eventCategory: { id: number }): void => {
            update(eventCategory.id, { ...eventCategory, deleted: true })
              .catch(() => {
                toast(
                  'La suppression de l\'événement catégorie a échouée',
                  'error'
                );
              })
            ;
          },
          onRowAdd: (eventCategory: object): void => {
            add(eventCategory)
              .catch(() => {
                toast(
                  'L\'ajout de l\'événement catégorie a échoué',
                  'error'
                );
              })
            ;
          },
        },
        validators: {
          title: (rowData: EventCategory) => !rowData.title ?
            { isValid: false, helperText: 'Veuillez saisir un titre' } : true,
          content: (rowData: EventCategory) => !rowData.content ?
            { isValid: false, helperText: 'Veuillez saisir un contenu' } : true,
        }
      } } /> : 'loading...' }
    </Container>
  </>;
};

export default EventCategory;
