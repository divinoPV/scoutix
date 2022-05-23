import React, {useEffect, useState} from 'react';

import style from './Role.module.scss';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';
import {
  getActivities,
  getFeatures
} from './ApiRequest';

const Role: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [activities, setActivities] = useState(null);

  const [features, setFeatures] = useState(null);

  const init = async () => {
    try {
      const { data: dataActivities } = await getActivities();
      const { data: dataFeatures } = await getFeatures();

      setActivities(dataActivities['hydra:member'].reduce((acc, curr) => [...acc, { ...curr, name: curr.title }], []));
      setFeatures(dataFeatures['hydra:member'].reduce((acc, curr) => [...acc, { ...curr, name: curr.title }], []));
      setIsFetching(false);
    } catch (e) {

    }
  };

  useEffect(() => {
    init();
  }, []);

  return <>
    <Container>
      <PageTitle>Autorisation - Role</PageTitle>
      { !isFetching ?
        <SwitchTable className={`${style['Role__switchTable']}`}
          data={{
          'body': activities,
          'header': features,
        }}
          horizontalHeaderLabel="Fonctionnalités"
          verticalHeaderLabel="Fonctions"
        />
      : 'loading...' }
    </Container>
  </>;
};

export default Role;
