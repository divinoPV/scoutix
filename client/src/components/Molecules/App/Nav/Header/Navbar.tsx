import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';
import { Store, useAppSelector } from '../../../../../utils/Redux/store';

const Navbar: React.FC = () => {
  const user = useAppSelector((state: Store) => state.user);

  return <Nav className={ `${ style['Nav'] }` }>
    <ul className={ `${ style['Navbar__list'] }` }>
      <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/">
        Accueil
      </NavItem>
      { !user.logged && <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/connexion">
        Se connecter
      </NavItem> }
      { user.logged && <li>
        <a className={ `${ style['Navbar__item'] } ${ style['Navbar__item--external'] }` }
          href="http://iplmi03kw9aw.scoutix.co:3000"
        >
          Tableau de bord
          <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
        </a>
      </li> }
      { user.logged && <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/changement-de-scope">
        Changer de scope
      </NavItem> }
      { user.logged && <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/deconnexion">
        Se déconnecter
      </NavItem> }
    </ul>
  </Nav>;
}

export default Navbar;
