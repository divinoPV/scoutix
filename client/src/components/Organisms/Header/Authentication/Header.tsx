import React from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';
import Navbar from '../../../Molecules/Nav/Authentication/Header/Navbar';

const Header: React.FC = () => <Headerom
  className={ `${ style['Header'] }` }
>
  <div className={ `${ style['Header__logoLink'] }` }>
    <object data="/media/svg/logo_white.svg" type="image/svg+xml" />
    <Link to="/" />
  </div>
  <Navbar />
</Headerom>;

export default Header;
