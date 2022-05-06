import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';
import Navbar from '../../../Molecules/Nav/Authentication/Header/Navbar';

const Header: React.FC = () => <Headerom
  className={ `${ styles['Header'] }` }
>
  <div className={ `${ styles['Header__logoLink'] }` }>
    <object data="/media/svg/logo_white.svg" type="image/svg+xml" />
    <Link to="/" />
  </div>
  <Navbar />
</Headerom>;

export default Header;
