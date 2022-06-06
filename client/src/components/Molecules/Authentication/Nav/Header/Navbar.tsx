import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ style['Nav'] }` }>
  <ul className={ `${ style['Navbar__list'] }` }>
    <NavItem
      classNameLink={ `${ style['Navbar__link'] }` }
      classNameElement={ `${ style['Navbar__element'] }` }
      path="/"
    >
      { !window.location.href.includes('/changement-de-scope') && <>
        <FontAwesomeIcon icon={ faRotateLeft } />
        Retour
      </> }
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
