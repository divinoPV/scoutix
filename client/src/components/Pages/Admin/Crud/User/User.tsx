import React, { useEffect } from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Global/Table/Table';
import { getUsers, updateUser } from './apiRequest/apiRequest';

const User: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(true);
  const [users, setUsers] = React.useState<object[]>([]);

  const upUser = async (newData, oldData) => {
    try {
      await updateUser(oldData.id, newData);
    } catch (e) {

    }
  };

  const deleteUser = async (oldData) => {
    try {
      await updateUser(oldData.id, { ...oldData, deleted: true });
    } catch (e) {

    }
  };

  const addUser = async (newData) => {
    try {
      await addUser(newData);
    } catch (e) {

    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      setUsers(data['hydra:member']);
      setIsFetching(false);
    } catch (e) {
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const config = {
    title: 'Mes utilisateurs',
    options: {
      columnsButton: true,
    },
    columns: [
      { title: 'Pseudonyme', field: 'username' },
      { title: 'Nom', field: 'patronym' },
      { title: 'Prénom', field: 'firstName' },
      { title: 'Email', field: 'email' },
      { title: 'Téléphone', field: 'mobile' },
      { title: 'Département', field: 'addressDepartment' },
      { title: 'Adresse rue', field: 'addressStreet' },
      { title: 'Ville', field: 'addressCity' },
      { title: 'N° adresse', field: 'addressNumber' },
      { title: 'Code postal', field: 'addressZipCode' },
      { title: 'Pays', field: 'addressCountry' },
      { title: 'Etat', field: 'addressState' },
      { title: 'Genre', field: 'gender' },
      { title: 'Date de naissance', field: 'birth' },
      { title: 'Ville de naissance', field: 'birthCity' },
      { title: 'Genre de naissance', field: 'birthGender' },
      { title: 'Code postal de naissance', field: 'birthZipCode' },
      { title: 'Mot de passe', field: 'password' },
    ],
    rows: users,
    editable: {
      onRowUpdate: upUser,
      onRowDelete: deleteUser,
      onRowAdd: addUser,
    },
    validators: {
      patronym: rowData => !rowData.patronym ?
        { isValid: false, helperText: 'Veuillez saisir un nom' } : true,
      firstName: rowData => !rowData.firstName ?
        { isValid: false, helperText: 'Veuillez saisir un prénom' } : true,
      email: rowData => !rowData.email ?
        { isValid: false, helperText: 'Veuillez saisir une adresse e-mail' } : true,
    }
  };

  return <>
    <Container>
      <PageTitle>Utilisateur</PageTitle>
      {!isFetching ? <Table table={config}/> : 'loading...'}
    </Container>
  </>;
};

export default User;
