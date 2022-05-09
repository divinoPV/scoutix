import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';
import { Store, useAppSelector } from '../../../../utils/Redux/store';

const Header: React.FC<{
  nav: React.ReactElement;
  fromAuth?: boolean;
}> = (
  {
    nav,
    fromAuth= false,
  }
) => {
  const user = useAppSelector((state: Store) => state.user);

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
            <Link className={ `${ style['Header__authentication__item'] }` } to="/changement-de-scope">
              Changer de scope
            </Link>
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
