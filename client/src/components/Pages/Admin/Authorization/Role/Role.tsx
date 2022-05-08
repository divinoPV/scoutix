import React from 'react';

import style from './Role.module.scss';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';

const Role: React.FC = () => {
  return <>
    <Container>
      <PageTitle>Autorisation - Role</PageTitle>
      <SwitchTable
        className={ `${ style['Role__switchTable'] }` }
        data={ {
          'body': [
            { 'id': 1, 'name': 'Function 1' },
            { 'id': 2, 'name': 'Function 2' },
            { 'id': 3, 'name': 'Function 3' },
            { 'id': 4, 'name': 'Function 4' },
            { 'id': 5, 'name': 'Function 5' },
            { 'id': 6, 'name': 'Function 6' },
            { 'id': 7, 'name': 'Function 7' },
            { 'id': 8, 'name': 'Function 8' },
            { 'id': 9, 'name': 'Function 9' },
            { 'id': 10, 'name': 'Function 10' },
            { 'id': 11, 'name': 'Function 11' },
            { 'id': 12, 'name': 'Function 12' },
            { 'id': 13, 'name': 'Function 13' },
            { 'id': 14, 'name': 'Function 14' },
            { 'id': 15, 'name': 'Function 15' },
            { 'id': 16, 'name': 'Function 16' },
            { 'id': 17, 'name': 'Function 17' },
            { 'id': 18, 'name': 'Function 18' },
            { 'id': 19, 'name': 'Function 19' },
            { 'id': 20, 'name': 'Function 20' },
            { 'id': 21, 'name': 'Function 21' },
            { 'id': 22, 'name': 'Function 22' },
            { 'id': 23, 'name': 'Function 23' },
            { 'id': 24, 'name': 'Function 24' },
            { 'id': 25, 'name': 'Function 25' },
            { 'id': 26, 'name': 'Function 26' },
          ],
          'header': [
            { 'id': 1, 'name': 'Feature 1' },
            { 'id': 2, 'name': 'Feature 2' },
            { 'id': 3, 'name': 'Feature 3' },
            { 'id': 4, 'name': 'Feature 4' },
            { 'id': 5, 'name': 'Feature 5' },
            { 'id': 6, 'name': 'Feature 6' },
            { 'id': 7, 'name': 'Feature 7' },
            { 'id': 8, 'name': 'Feature 8' },
            { 'id': 9, 'name': 'Feature 9' },
            { 'id': 10, 'name': 'Feature 10' },
            { 'id': 11, 'name': 'Feature 11' },
            { 'id': 12, 'name': 'Feature 12' },
            { 'id': 13, 'name': 'Feature 13' },
            { 'id': 14, 'name': 'Feature 14' },
          ],
        } }
        horizontalHeaderLabel="Fonctionnalités"
        verticalHeaderLabel="Fonctions"
      />
    </Container>
  </>;
};

export default Role;
