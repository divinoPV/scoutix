import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ styles['Nav'] }` }>
  <ul className={ `${ styles['Navbar__list'] }` }>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/">
      Tableau de bord
    </NavItem>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/autorisation-role">
      Autorisation de rôle
    </NavItem>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/categorie-evenement">
      Catégorie d'événement
    </NavItem>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/scope">
      Scope
    </NavItem>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/utilisateur">
      Utilisateur
    </NavItem>
    <li>
      <a className={ `${ styles['Navbar__item'] } ${ styles['Navbar__item--external'] }` }
        href="http://scoutix.co:3000"
      >
        Site public
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
    <NavItem classNameLink={ `${ styles['Navbar__item'] }` } path="/deconnexion">
      Se déconnecter
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
