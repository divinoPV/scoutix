import React, {useEffect} from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from "../../../../Organisms/Generics/Table/Table";
import useNotif from "../../../../Trumps/Helper/Hook/Notif";
import baseAxios from "../../../../../utils/Axios/axios";

const EventCategory: React.FC = () => {

  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [categs, setCategs] = React.useState<any[]>([]);
  const updateCateg = (id: number, data: object) => baseAxios.put(`/event_categories/${id},${data}`);
  const delCateg = (id: number, data: object) => baseAxios.patch(`/event_categories/${id},${data}`);
  const adCateg = (data: object) => baseAxios.post(`/event_categories/${data}`);

  const upCatge = async (newData, oldData) => {
    try {
      await updateCateg(newData.id, newData);
    } catch (e) {
    }
  }

  const deleteCateg = async (oldData) => {
    try {
      await delCateg(oldData.id,oldData.delete);
    } catch (e) {
    }
  }

  const addCateg = async (newData) => {
    try {
      await adCateg(newData);
    } catch (e) {
    }
  }

  const getCategs = async () => {
    try {
      const { data } = await baseAxios.get('/event_categories');
      setCategs(data);
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
      { title: 'Content', field: 'content' },
    ],
    rows: categs,
    editable: {
      onRowUpdate: upCatge,
      onRowDelete: deleteCateg,
      onRowAdd: addCateg,
    },
    validators: {
      title: rowData => rowData.title === '' ?
          { isValid: false, helperText: 'Title cannot be empty' } : true,
      content: rowData => rowData.content === '' ?
          { isValid: false, helperText: 'Content cannot be empty' } : true,
    }
  };

  return <>
    <Container>
      <PageTitle>Événement - Catégorie</PageTitle>
      { !isFetching ? <Table table={config}/> : 'loading...' }
    </Container>
  </>;
};

export default EventCategory;
