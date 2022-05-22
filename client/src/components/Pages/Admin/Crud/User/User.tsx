import React from 'react';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import Table from '../../../../Organisms/Global/Table/Table';

const User: React.FC = () => {
  /** TODO */
  const updateUser = () => new Promise(
    (resolve) => setTimeout(() => resolve(1), 5000)
  );

  const upUser = async (newData: any, oldData: any) => {
    await updateUser();
  };

  const deleteUser = async (oldData: any) => {
    await updateUser();
  };

  const addUser = async (newData: any) => {
    await updateUser();
  };

  const config = {
    title: 'Mes utilisateurs',
    columns: [
      {title: 'Nom', field: 'name'},
      {title: 'Prénom', field: 'firstName'},
      {title: 'Email', field: 'email'},
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
      onRowDelete: deleteUser,
      onRowAdd: addUser,
    },
    validators: {
      name: (rowData: { name: string }) => rowData.name === '' ?
        {isValid: false, helperText: 'Name cannot be empty'} : true,
      firstName: (rowData: { firstName: string }) => rowData.firstName === '' ?
        {isValid: false, helperText: 'Firstname cannot be empty'} : true,
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
