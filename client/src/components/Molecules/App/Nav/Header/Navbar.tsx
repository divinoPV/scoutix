import React from 'react';
import { Store, useSelectorook } from '../../../../../utils/Redux/store';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => {
  const user = useSelectorook((state: Store) => state.user);

  return <Nav className={ `${ style['Nav'] }` }>
    <ul className={ `${ style['Navbar__list'] }` }>
      <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/">
        Accueil
      </NavItem>
      { user.logged && <>
        <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/annuaire">
          Annuaire
        </NavItem>
        <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/agenda">
          Agenda
        </NavItem>
        <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/documents">
          Documents
        </NavItem>
        <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/messagerie">
          Messagerie
        </NavItem>
      </> }
    </ul>
  </Nav>;
};

export default Navbar;
