import React, { useEffect, useState } from 'react';

import style from './Role.module.scss';

import type {
  authorization,
  activity,
  feature
} from '../../../../../utils/@types/types';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';
import useNotif from '../../../../Trumps/Helper/Hook/Notif';
import {
  getActivities,
  getFeatures,
  getAuthorizationsRole,
  addAuthorizationRole,
  updateAuthorizationRole
} from './ApiRequest/ApiRequest';

const Role: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const [activities, setActivities] = useState(null);

  const [features, setFeatures] = useState(null);

  const [authorizations, setAuthorizations] = useState<Array<authorization>>([]);

  const init = async () => {
    try {
      const { data: dataActivities } = await getActivities();
      const { data: dataFeatures } = await getFeatures();
      const { data: dataAuthorizations } = await getAuthorizationsRole();

      setAuthorizations(dataAuthorizations['hydra:member']);
      setActivities(dataActivities['hydra:member'].reduce((acc, curr) => 
        [...acc, { ...curr, name: curr.title }], []));
      setFeatures(dataFeatures['hydra:member'].reduce((acc, curr) => 
        [...acc, { ...curr, name: curr.title }], []));
      setIsFetching(false);
    } catch (e) {

    }
  };

  const constraint = (activity: activity, feature: feature) => (
    !!authorizations.find(authorization =>
      activity['@id'] === authorization.activity
      && feature['@id'] === authorization.feature
      && !authorization.deleted
    )
  );

  const callback = async (activity: activity, feature: feature) => {
    const authorization = authorizations.find(authorization =>
      activity['@id'] === authorization.activity
      && feature['@id'] === authorization.feature
    )
    if (authorization) {
      await updateAuthorizationRole(
        'authorization_activity_features/activity=1;feature=5',
        { ...authorization, deleted: true }
      );
      useNotif({ message: 'Authorization modifié' });
    } else {
      await addAuthorizationRole(
        {
          activity: activity['@id'],
          feature: feature['@id'],
          archived: false,
          deleted: false
        }
      );
      useNotif({ message: 'Authorization modifié' });
    }
  }

  useEffect(() => {
    init();
  }, []);

  return <>
    <Container>
      <PageTitle>Autorisation - Role</PageTitle>
      {!isFetching ?
        <SwitchTable className={`${style['Role__switchTable']}`}
          constraint={constraint}
          callback={callback}
          data={{
            'body': activities,
            'header': features,
          }}
          horizontalHeaderLabel="Fonctionnalités"
          verticalHeaderLabel="Fonctions"
        />
        : 'loading...'}
    </Container>
  </>;
};

export default Role;
