import React from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Generics/Table/Table';

const User: React.FC = () => {
  const updateUser = () => new Promise((resolve) => setTimeout(() => resolve(), 5000));

  const upUser = async (newData, oldData) => {
    await updateUser();
  }

  const deleteUser = async (oldData) => {
    await updateUser();
  }

  const addUser = async (newData) => {
    await updateUser();
  }

  const config = {
    title: 'Mes utilisateurs',
    columns: [
      { title: 'Nom', field: 'name' },
      { title: 'Prénom', field: 'firstName' },
      { title: 'Email', field: 'email' },
    ],
    rows: [...Array(10).keys()].map((i) => (
      {
        id: i,
        name: `John-${i}`,
        firstName: `Doe-${i}`,
        email: `johndoe${i}@example.com`
      }
    )),
    editable: {
      onRowUpdate: upUser,
      onRowAdd: addUser,
      onRowDelete: deleteUser,
    },
    Validators: {
      name: (rowData: object) => rowData.name === '' ?
        { isValid: false, helperText: 'Name cannot be empty' } : true,
    }
  };

  return <>
    <Container>
      <PageTitle>Utilisateur</PageTitle>
      <Table table={config}/>
    </Container>
  </>;
};

export default User;
