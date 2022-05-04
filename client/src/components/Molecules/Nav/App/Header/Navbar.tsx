import React from 'react';

import styles from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ styles['Nav'] }` }>
  <ul className={ `${ styles['HeaderAppNav__list'] }` }>
    <NavItem classNameLink={ `${ styles['HeaderAppNav__item'] }` } path="/">
      Accueil
    </NavItem>
    <NavItem classNameLink={ `${ styles['HeaderAppNav__item'] }` } path="/connexion">
      Connexion
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
