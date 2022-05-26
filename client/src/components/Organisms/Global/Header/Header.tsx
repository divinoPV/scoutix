import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserGear } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';
import { Store, useSelectorook } from '../../../../utils/Redux/store';
import axios from '../../../../utils/Axios/axios';
import toast from '../../../../utils/Toast/default';

const Header: React.FC<{
  nav: React.ReactElement;
  fromAuth?: boolean;
}> = (
  {
    nav,
    fromAuth = false,
  }
) => {
  const [scopate, setScopate] = useState(
    {
      activity: '',
      locality: '',
    } as {
      activity: string;
      locality: string;
    }
  );

  const [error, setError] = useState('');

  const user = useSelectorook((state: Store) => state.user);

  const scope = useSelectorook((state: Store) => state.scope);

  useEffect(() => {
    if (0 !== scope.id) {
      axios.get(`/activities/${ scope.id }/only/?fields=title`)
        .then((result) => {
          const activity = JSON.parse(result.data).title;

          axios.get(`/localities/${ scope.id }/only/?fields=title`)
            .then((result) => {
              const locality = JSON.parse(result.data).title;

              setScopate({
                activity,
                locality,
              });
            })
            .catch((error) => {
              setError(error.message);
            })
          ;
        })
        .catch((error) => {
          setError(error.message);
        })
      ;
    }
  }, [scope]);

  useEffect(() => {
    if (0 !== scope.id && error) {
      toast(error, 'error');
    }
  }, [error, scope]);

  return <Headerom className={ `${ style['Header'] }` }>
    <div className={ `${ style['Header__container'] }` }>
      <div className={ `${ style['Header__logoLink'] }` }>
        <object data="/media/svg/logo_white.svg" type="image/svg+xml" />
        <Link to="/" />
      </div>
      { nav }
    </div>
    <div className={ `${ style['Header__authentication'] }` }>
      {
        user.logged
          ? <>
            <div className={ `${ style['Header__authentication__user'] }` }>
              <FontAwesomeIcon icon={ faUserTie } />
              <span>{ user.username }</span>
            </div>
            <span className={ `${ style['Header__authentication__divider'] }` }>|</span>
            { !window.location.href.includes('/changement-de-scope') &&
              <Link
                className={
                  `${ style['Header__authentication__item'] }`
                  + ` ${ style['Header__authentication__item--svg'] }`
                }
                to="/changement-de-scope"
              >
                <FontAwesomeIcon icon={ faUserGear } />
                { `${scopate.activity} - ${scopate.locality}` }
              </Link>
            }
            <Link className={ `${ style['Header__authentication__item'] }` } to="/deconnexion">
              Se déconnecter
            </Link>
          </>
          : <>
            { !fromAuth && <Link
              className={ `${ style['Header__authentication__item'] }` }
              to="/connexion"
            >
              Se connecter
            </Link> }
          </>
      }
    </div>
  </Headerom>;
};

export default Header;
