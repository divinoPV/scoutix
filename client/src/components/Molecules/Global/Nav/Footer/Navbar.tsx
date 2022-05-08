import React from 'react';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';
import NavItem from '../../../../Atoms/Nav/Item';

const Navbar: React.FC = () => <Nav className={ `${ style['Nav'] }` }>
  <ul className={ `${ style['FooterAppNav__list'] }` }>
    <NavItem classNameLink={ `${ style['FooterAppNav__item'] }` } path="/">
      © Scoutix - 2022
    </NavItem>
    <NavItem classNameLink={ `${ style['FooterAppNav__item'] }` } path="/mentions-legales">
      Mentions légales
    </NavItem>
    <NavItem classNameLink={ `${ style['FooterAppNav__item'] }` } path="/gestions-des-cookies">
      Gestions des cookies
    </NavItem>
  </ul>
</Nav>;

export default Navbar;
