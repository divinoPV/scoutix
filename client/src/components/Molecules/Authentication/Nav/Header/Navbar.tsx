import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import style from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';

const Navbar: React.FC = () => <Nav className={ `${ style['Nav'] }` }>
  <ul className={ `${ style['Navbar__list'] }` }>
    <li>
      <a className={ `${ style['Navbar__item'] } ${ style['Navbar__item--external'] }` }
        href="http://scoutix.co:3000"
      >
        Site public
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
    <li>
      <a className={ `${ style['Navbar__item'] } ${ style['Navbar__item--external'] }` }
        href="http://iplmi03kw9aw.scoutix.co:3000"
      >
        Tableau de bord
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
  </ul>
</Nav>;

export default Navbar;
