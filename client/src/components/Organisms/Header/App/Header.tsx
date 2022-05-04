import React from 'react';

import styles from './Header.module.scss';

import Headerom from '../../../Atoms/Header/Header';
import Navbar from '../../../Molecules/Nav/App/Header/Navbar';

import { Link } from 'react-router-dom';

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
