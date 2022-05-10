import React, { useEffect } from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Generics/Table/Table';
import {
  addCategory,
  getCategories,
  updateCategory
} from './ApiRequest/ApiRequest';

const EventCategory: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [categories, setCategories] = React.useState<any[]>([]);

  const updateCateg = async (newData, oldData) => {
    try {
      await updateCategory(oldData.id, newData);
    } catch (e) {
    }
  }

  const deleteCateg = async (oldData) => {
    try {
      await updateCategory(oldData.id, { ...oldData, deleted: true });
    } catch (e) {
    }
  }

  const addCateg = async (newData) => {
    try {
      await addCategory(newData);
    } catch (e) {
    }
  }

  const getCategs = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data['hydra:member']);
      setIsFetching(false);
    } catch (e) {
    }
  }

  useEffect(() => {
    getCategs();
  }, []);

  const config = {
    title: 'Mes catégories d\'évènements',
    columns: [
      { title: 'Titre', field: 'title' },
      { title: 'Contenu', field: 'content' },
    ],
    rows: categories,
    editable: {
      onRowUpdate: updateCateg,
      onRowDelete: deleteCateg,
      onRowAdd: addCateg,
    },
    validators: {
      title: rowData => rowData.title === '' ?
        { isValid: false, helperText: 'Veuillez saisir un titre' } : true,
      content: rowData => rowData.content === '' ?
        { isValid: false, helperText: 'Veuillez saisir un contenu' } : true,
    }
  };

  return <>
    <Container>
      <PageTitle>Événement - Catégorie</PageTitle>
      { !isFetching ? <Table table={config} /> : 'loading...' }
    </Container>
  </>;
};

export default EventCategory;
