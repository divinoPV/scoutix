import React, { useEffect, useState } from 'react';

import style from './Role.module.scss';

import type {
  activity,
  feature
} from '../../../../../utils/@types/types';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';
import useNotif from '../../../../Trumps/Hook/Notif';
import {
  getAuthorizationsRole,
  addAuthorizationRole,
  deleteAuthorizationRole,
} from './ApiRequest/ApiRequest';

const Role: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [authorizationsRole, setAuthorizationsRole] = useState({});

  const init = async () => {
    try {
      const { data } = await getAuthorizationsRole();
      setAuthorizationsRole(JSON.parse(data));
      setIsFetching(false);
    } catch (e) {

    }
  };

  const constraint = (activity: activity, feature: feature) => (
    !!authorizationsRole.authorizations.find(authorization =>
      activity.id === authorization.activity.id
      && feature.id === authorization.feature.id
      && !authorization.deleted
    )
  );

  const callback = async (activity: activity, feature: feature) => {
    const authorization = authorizationsRole.authorizations.find(authorization =>
      activity.id === authorization.activity.id
      && feature.id === authorization.feature.id
    );
    try {
      if (authorization) {
        await deleteAuthorizationRole(authorization.feature.id, authorization.activity.id);
        useNotif({ message: 'Authorization modifié' });
      } else {
        await addAuthorizationRole(
          {
            activity: activity,
            feature: feature,
            archived: false,
            deleted: false
          }
        );
        useNotif({ message: 'Authorization modifié' });
      }
    } catch (e) {
     console.log(e);
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
            'body': authorizationsRole.activities,
            'header': authorizationsRole.features,
          }}
          horizontalHeaderLabel="Fonctionnalités"
          verticalHeaderLabel="Fonctions"
        />
        : 'loading...'}
    </Container>
  </>;
};

export default Role;
