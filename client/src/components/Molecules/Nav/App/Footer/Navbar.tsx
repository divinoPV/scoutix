import React from 'react';

import styles from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ styles['Nav'] }` }>
  <ul className={ `${ styles['FooterAppNav__list'] }` }>
    <NavItem classNameLink={ `${ styles['FooterAppNav__item'] }` } path="/">
      © Scoutix - 2022
    </NavItem>
    <NavItem classNameLink={ `${ styles['FooterAppNav__item'] }` } path="/mentions-legales">
      Mentions légales
    </NavItem>
    <NavItem classNameLink={ `${ styles['FooterAppNav__item'] }` } path="/gestions-des-cookies">
      Gestions des cookies
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
