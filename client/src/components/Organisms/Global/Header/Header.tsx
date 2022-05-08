import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';

const Header: React.FC<{
  nav: React.ReactElement;
}> = (
  {
    nav
  }
) => <Headerom className={ `${ style['Header'] }` }>
  <div className={ `${ style['Header__logoLink'] }` }>
    <object data="/media/svg/logo_white.svg" type="image/svg+xml" />
    <Link to="/" />
  </div>
  { nav }
</Headerom>;

export default Header;
