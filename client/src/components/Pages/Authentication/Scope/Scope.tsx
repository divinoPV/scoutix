import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';

import style from './Scope.module.scss';

import axios from '../../../../utils/Axios/axios';
import {
  Store,
  useDispatchook,
  useSelectorook
} from '../../../../utils/Redux/store';
import { reset, set } from '../../../../utils/Redux/Slice/scope';
import Authentication from '../../../Templates/Authentication/Authentication';

const Scope: React.FC = () => {
  const [scopes, setScopes] = useState<[{
    id: number,
    activity: { id: number, title: string },
    locality: { id: number, title: string },
  }]>([{
    id: 0,
    activity: { id: 0, title: '' },
    locality: { id: 0, title: '' },
  }]);

  const [error, setError] = useState<string>('');

  const user = useSelectorook((state: Store) => state.user);

  const scope = useSelectorook((state: Store) => state.scope);

  const dispatch = useDispatchook();

  useEffect(() => {
    (async () => {
      try {
        setScopes(JSON.parse((await axios.get(`/users/${ user.id }/scopes`))?.data));
        setError('');
      } catch (error: any) {
        setScopes([{
          id: 0,
          activity: { id: 0, title: '' },
          locality: { id: 0, title: '' },
        }]);
        setError(error.message);
      }
    })();
  }, [user]);

  return !user.logged
    ? <Navigate to="/connexion" />
    : <Authentication classMain={ `${ style['Scope__main'] }` }>
      <div className={ `${ style['Scope__container'] }` }>
        <h1 className={ `${ style['Scope__title'] }` }>Choisissez votre scope</h1>
        { error && <span className={ `${ style['Scope__error'] }` }>{ error }</span> }
        <div className={ `${ style['Scope__scopes'] }` }>
          { 0 !== scopes[0].id && scopes.map((
            {
              id,
              activity,
              locality
            }
          ) => <div
            className={ `${ style['Scope__scope'] }` + (id === scope.id ? ` ${ style['Scope__scope--selected'] }` : '') }
            key={ id }
            onClick={ () => dispatch(id === scope.id
              ? reset()
              : set({
                id,
                activity: {
                  id: activity.id,
                  title: activity.title,
                },
                locality: {
                  id: locality.id,
                  title: locality.title,
                },
              })
            ) }
          >
            <div className={ `${ style['Scope__scope__title'] }` }>
              <span className={ `${ style['Scope__scope__activity'] }` }>{ activity.title }</span>
              <span className={ `${ style['Scope__scope__hyphen'] }` }>-</span>
              <span className={ `${ style['Scope__scope__locality'] }` }>{ locality.title }</span>
              { id === scope.id && <>
                <FontAwesomeIcon
                  className={
                    `${ style['Scope__scope--selected__icon'] }`
                    + ` ${ style['Scope__scope--selected__icon--check'] }`
                  }
                  icon={ faCircleCheck }
                />
                <FontAwesomeIcon
                  className={
                    `${ style['Scope__scope--selected__icon'] }`
                    + ` ${ style['Scope__scope--selected__icon--xmark'] }`
                  }
                  icon={ faCircleXmark }
                />
              </> }
            </div>
          </div>) }
        </div>
        {
          0 !== scope?.id && <Link
            className={ `${ style['Scope__link'] }` }
            to="/"
          >
            Site public
          </Link>
        }
      </div>
    </Authentication>;
};

export default Scope;
