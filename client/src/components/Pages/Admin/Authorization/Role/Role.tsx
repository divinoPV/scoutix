import React, { useEffect, useRef, useState } from 'react';
import { AxiosResponse } from 'axios';

import style from './Role.module.scss';

import type { activitype } from '../../../../../utils/Types/activitype';
import type { featurype } from '../../../../../utils/Types/featurype';

import Container from '../../../../Atoms/Container/Container';
import PageTitle from '../../../../Atoms/Title/Page/PageTitle';
import SwitchTable from '../../../../Organisms/Global/SwitchTable/SwitchTable';
import toast from '../../../../../utils/Toast/default';
import { role } from '../../../../../utils/Types/authorizationype';
import {
  authorizationRolype
} from '../../../../../utils/Types/authorization_rolype';
import {
  add,
  all as allRoles,
  anonymize
} from '../../../../../utils/Request/authorizationequest';
import {
  all as allActivities
} from '../../../../../utils/Request/activitequest';
import {
  all as allFeatures
} from '../../../../../utils/Request/featurequest';

const Role: React.FC = () => {
  const nbFetch = useRef<number>(0);

  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  const [reload, setReload] = React.useState<boolean>(false);

  const [authorizationsRole, setAuthorizationsRole] = useState(
    {} as authorizationRolype[]
  );

  const [activities, setActivities] = useState({} as activitype[]);

  const [features, setFeatures] = useState({} as featurype[]);

  useEffect(() => {
    allRoles(role)
      .then((response: AxiosResponse) => {
        setAuthorizationsRole(JSON.parse(response.data));

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des authorizations a échoué.', 'error');
      })
    ;

    allActivities()
      .then((response: AxiosResponse) => {
        setActivities(response.data['hydra:member']);

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des activités a échoué.', 'error');
      })
    ;

    allFeatures()
      .then((response: AxiosResponse) => {
        setFeatures(response.data['hydra:member']);

        nbFetch.current += 1;
        2 < nbFetch.current && setIsFetching(false);
      })
      .catch(() => {
        toast('La récupération des fonctionnalités a échoué.', 'error');
      })
    ;

    setReload(false);
  }, [reload]);

  return <>
    <Container>
      <PageTitle>Autorisation - Role</PageTitle>
      { !isFetching
        ? <SwitchTable
          className={ `${ style['Role__switchTable'] }` }
          constraint={ (activity: activitype, feature: featurype) => (
            !!authorizationsRole.find(authorization =>
              activity.id === authorization.activity.id
              && feature.id === authorization.feature.id
            )
          ) }
          callback={ async (activity: activitype, feature: featurype) => {
            const authorization = authorizationsRole.find(authorization =>
              activity.id === authorization.activity.id
              && feature.id === authorization.feature.id
            );

            authorization
              ? anonymize(
                role,
                authorization.activity.id,
                authorization.feature.id,
              )
                .then(() => {
                  toast(
                    'La suppression de l\'autorisation ' +
                    'a été effectuée avec succès.',
                    'success'
                  );
                })
                .catch(() => {
                  toast(
                    'La suppression de l\'autorisation a échoué.',
                    'error'
                  );
                })
              : add(
                role,
                {
                  activity: activity,
                  feature: feature,
                }
              )
                .then(() => {
                  toast(
                    'L\'ajout de l\'autorisation ' +
                    'a été effectuée avec succès.',
                    'success'
                  );
                })
                .catch(() => {
                  toast(
                    'L\'ajout de l\'autorisation a échoué.',
                    'error'
                  );
                })
            ;

            setReload(true);
          } }
          data={ {
            'body': activities,
            'header': features,
          } }
          horizontalHeaderLabel="Fonctionnalités"
          verticalHeaderLabel="Activités"
        />
        : 'loading...'
      }
    </Container>
  </>;
};

export default Role;
