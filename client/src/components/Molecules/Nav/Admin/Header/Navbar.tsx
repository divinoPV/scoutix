import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ style['Nav'] }` }>
  <ul className={ `${ style['Navbar__list'] }` }>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/">
      Tableau de bord
    </NavItem>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/autorisation-role">
      Autorisation de rôle
    </NavItem>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/categorie-evenement">
      Catégorie d'événement
    </NavItem>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/scope">
      Scope
    </NavItem>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/utilisateur">
      Utilisateur
    </NavItem>
    <li>
      <a className={ `${ style['Navbar__item'] } ${ style['Navbar__item--external'] }` }
        href="http://scoutix.co:3000"
      >
        Site public
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
    <NavItem classNameLink={ `${ style['Navbar__item'] }` } path="/deconnexion">
      Se déconnecter
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
