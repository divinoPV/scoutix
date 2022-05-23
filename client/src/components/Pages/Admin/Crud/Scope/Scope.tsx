import React, { useEffect, useState } from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Global/Table/Table';

import {
  getScopes,
  updateScope,
  addScope
} from './ApiRequest/ApiRequest';
import { getLocalities } from '../Locality/ApiRequest/ApiRequest';
import { getActivities } from '../Activity/ApiRequest/ApiRequest';

type RowData = {
  id: number;
  name: string;
  title: string;
  description: string;
  locality: string;
  activity: string;
};

const Scope: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [scopes, setScopes] = useState<RowData[]>([]);
  const [activities, setActivities] = useState<object[]>([]);
  const [localities, setLocalities] = useState<object[]>([]);

  const updateAScope= async (newData: RowData, oldData: RowData) => {
    try {
      await updateScope(oldData.id, newData);
    } catch (e) {

    }
  }

  const deleteAScope = async (oldData: RowData) => {
    try {
      await updateScope(oldData.id, { ...oldData, deleted: true });
    } catch (e) {
    }
  }

  const addAScope= async (newData: RowData) => {
    try {
      await addScope(newData);
    } catch (e) {
    }
  }

  const getAllScopes = async () => {
    try {
      const { data } = await getScopes();
      setScopes(data['hydra:member']
        .reduce((acc: Array<RowData>, curr: RowData) => {
          return [...acc,
            { ...curr, locality: curr.locality['@id'],
              activity: curr.activity['@id']
            }];
        }, []));
    } catch (e) {
    }
  }

  const getAllLocalities = async () => {
    try {
      const { data } = await getLocalities();
      setLocalities(data['hydra:member']
        .reduce((acc: Array<string>, curr: RowData) => {
          acc[curr['@id']] = curr.title;
          return acc;
        }, {}));
    } catch (e) {

    }
  }

  const getAllActivities = async () => {
    try {
      const { data } = await getActivities();
      setActivities(data['hydra:member']
        .reduce((acc: Array<string>, curr: RowData) => {
          acc[curr['@id']] = curr.title;
          return acc;
        }, {}));
    } catch (e) {

    }
  }

  const fetch = async () => {
    await getAllScopes();
    await getAllLocalities();
    await getAllActivities();
    setIsFetching(false);
  }

  useEffect(() => {
    fetch();
  }, []);

  const config = {
    title: 'Mes scopes',
    columns: [
      { title: 'Fonctions', field: 'activity', lookup: activities },
      { title: 'Localisation', field: 'locality', lookup: localities },
      { title: 'Archivé', field: 'archived', type: 'boolean' }
    ],
    rows: scopes,
    editable: {
      onRowUpdate: updateAScope,
      onRowDelete: deleteAScope,
      onRowAdd: addAScope,
    },
  };

  return <>
    <Container>
      <PageTitle>Scope</PageTitle>
      { !isFetching ? <Table table={config} /> : 'loading...' }
    </Container>
  </>;
};

export default Scope;
