import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './Navbar.module.scss';

import Nav from '../../../../Atoms/Nav/Nav';

const Navbar: React.FC = () => <Nav className={ `${ styles['Nav'] }` }>
  <ul className={ `${ styles['Navbar__list'] }` }>
    <li>
      <a className={ `${ styles['Navbar__item'] } ${ styles['Navbar__item--external'] }` }
        href="http://scoutix.co:3000"
      >
        Site public
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
    <li>
      <a className={ `${ styles['Navbar__item'] } ${ styles['Navbar__item--external'] }` }
        href="http://iplmi03kw9aw.scoutix.co:3000"
      >
        Tableau de bord
        <FontAwesomeIcon icon={ faArrowUpRightFromSquare } />
      </a>
    </li>
  </ul>
</Nav>;

export default Navbar;
