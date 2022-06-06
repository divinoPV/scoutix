import React, { useEffect } from 'react';
import { AxiosResponse } from 'axios';

import Container from '../../../../Atoms/Container/Container';
import Table from '../../../../Organisms/Global/Table/Table';
import toast from '../../../../../utils/Toast/default';
import {
  add,
  available,
  update
} from '../../../../../utils/Request/userequest';
import { object } from 'yup';

const User: React.FC = () => {
  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  const [users, setUsers] = React.useState<object[]>([]);

  useEffect(() => {
    available()
      .then((result: AxiosResponse) => {
        setUsers(result.data['hydra:member']);
        setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des utilisateurs a échouée', 'error');
      });
  }, []);

  return <>
    <Container>
      { !isFetching ? <Table table={ {
        title: 'Utilisateurs',
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
          onRowUpdate: (user: object, oldUser: { id: number }): void => {
            update(oldUser.id, user)
              .catch(() => {
                toast('La mise à jour de l\'utilisateur a échouée', 'error');
              })
            ;
          },
          onRowDelete: (user: { id: number }): void => {
            update(user.id, { ...user, deleted: true })
              .catch(() => {
                toast('La suppression de l\'utilisateur a échouée', 'error');
              })
            ;
          },
          onRowAdd: (user: object): void => {
            add(user)
              .catch(() => {
                toast('L\'ajout de l\'utilisateur a échoué', 'error');
              })
            ;
          },
        },
        validators: {
          patronym: (rowData: any) => !rowData.patronym ?
            { isValid: false, helperText: 'Veuillez saisir un nom' } : true,
          firstName: (rowData: any) => !rowData.firstName ?
            { isValid: false, helperText: 'Veuillez saisir un prénom' } : true,
          email: (rowData: any) => !rowData.email ?
            {
              isValid: false,
              helperText: 'Veuillez saisir une adresse e-mail'
            } : true,
        }
      } } /> : 'loading...' }
    </Container>
  </>;
};

export default User;
