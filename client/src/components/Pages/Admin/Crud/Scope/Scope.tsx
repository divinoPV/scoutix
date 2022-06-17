import React, { useEffect, useRef, useState } from 'react';
import { AxiosResponse } from 'axios';

import Container from '../../../../Atoms/Container/Container';
import Table from '../../../../Organisms/Global/Table/Table';
import toast from '../../../../../utils/Toast/default';
import {
  all as allActivities
} from '../../../../../utils/Request/activitequest';
import {
  all as allLocalities
} from '../../../../../utils/Request/localitequest';
import {
  add,
  available,
  update
} from '../../../../../utils/Request/scopequest';

type RowData = {
  id: number;
  name: string;
  title: string;
  description: string;
  locality: string;
  activity: string;
};

const Scope: React.FC = () => {
  const nbFetch = useRef<number>(0);

  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  const [scopes, setScopes] = useState<RowData[]>([]);

  const [activities, setActivities] = useState<object[]>([]);

  const [localities, setLocalities] = useState<object[]>([]);

  useEffect(() => {
    allActivities()
      .then((result: AxiosResponse) => {
        setActivities(result.data['hydra:member']
          .reduce((acc: Array<string>, curr: RowData) => {
            acc[curr['@id']] = curr.title;

            return acc;
          }, {}));

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des activités a échoué.', 'error');
      })
    ;

    allLocalities()
      .then((result: AxiosResponse) => {
        setLocalities(result.data['hydra:member']
          .reduce((acc: Array<string>, curr: RowData) => {
            acc[curr['@id']] = curr.title;

            return acc;
          }, {}));

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des localités a échoué.', 'error');
      })
    ;

    available()
      .then((result: AxiosResponse) => {
        setScopes(result.data['hydra:member']
          .reduce((acc: Array<RowData>, curr: RowData) => [
            ...acc,
            {
              ...curr,
              activity: curr.activity['@id'],
              locality: curr.locality['@id'],
            }
          ], [])
        );

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des scopes a échoué.', 'error');
      })
    ;
  }, []);

  return <>
    <Container>
      { !isFetching ? <Table table={ {
        title: 'Mes scopes',
        columns: [
          { title: 'Fonctions', field: 'activity', lookup: activities },
          { title: 'Localisation', field: 'locality', lookup: localities },
          { title: 'Archivé', field: 'archived', type: 'boolean' }
        ],
        rows: scopes,
        editable: {
          onRowUpdate: (
            scope: RowData,
            oldScope: RowData,
          ): void => {
            update(oldScope.id, scope)
              .catch(() => {
                toast(
                  'La mise à jour du scope a échoué.',
                  'error'
                );
              })
            ;
          },
          onRowDelete: (scope: RowData): void => {
            update(scope.id, { ...scope, deleted: true })
              .catch(() => {
                toast(
                  'La suppression du scope a échoué.',
                  'error'
                );
              })
            ;
          },
          onRowAdd: (scope: RowData): void => {
            add(scope)
              .catch(() => {
                toast(
                  'L\'ajout du scope a échoué',
                  'error'
                );
              })
            ;
          },
        },
      } } /> : 'loading...' }
    </Container>
  </>;
};

export default Scope;
