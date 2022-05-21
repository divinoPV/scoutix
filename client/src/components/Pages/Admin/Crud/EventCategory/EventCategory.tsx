import React, { useEffect } from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Global/Table/Table';
import {
  addCategory,
  getCategories,
  updateCategory
} from './ApiRequest/ApiRequest';

interface EventCategory {
  [key: string]: string | number;
}

const EventCategory: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [categories, setCategories] = React.useState<any[]>([]);

  const updateCateg = async (newData: object, oldData: { id: number }) => {
    try {
      await updateCategory(oldData.id, newData);
    } catch (e) {
      e;
    }
  };

  const deleteCateg = async (oldData: { id: number }) => {
    try {
      await updateCategory(oldData.id, {...oldData, deleted: true});
    } catch (e) {
      e;
    }
  };

  const addCateg = async (newData: object) => {
    try {
      await addCategory(newData);
    } catch (e) {
      e;
    }
  };

  const getCategs = async () => {
    try {
      const {data} = await getCategories();
      setCategories(data['hydra:member']);
      setIsFetching(false);
    } catch (e) {
      e;
    }
  };

  useEffect(() => {
    getCategs();
  }, []);

  const config = {
    title: 'Mes catégories d\'évènements',
    columns: [
      {title: 'Titre', field: 'title'},
      {title: 'Contenu', field: 'content'},
    ],
    rows: categories,
    editable: {
      onRowUpdate: updateCateg,
      onRowDelete: deleteCateg,
      onRowAdd: addCateg,
    },
    validators: {
      title: (rowData: EventCategory) => !rowData.title ?
        { isValid: false, helperText: 'Veuillez saisir un titre' } : true,
      content: (rowData: EventCategory) => !rowData.content ?
        { isValid: false, helperText: 'Veuillez saisir un contenu' } : true,
    }
  };

  return <>
    <Container>
      <PageTitle>Événement - Catégorie</PageTitle>
      {!isFetching ? <Table table={config}/> : 'loading...'}
    </Container>
  </>;
};

export default EventCategory;
