import React from 'react';
import NavItem from '../../Molecules/NavItem/NavItem';

const Navbar = (): JSX.Element => <nav>
  <a href="#">Logo</a>
  <ul>
    <NavItem />
    <NavItem />
    <NavItem />
    <NavItem />
  </ul>
</nav>;

export default Navbar;
