import React from 'react';

import NavItem from '../../Molecules/NavItem';

function Navbar() {
  return (
    <nav>
      <div>
        <a href="#">
          Logo
        </a>
        <ul>
          <NavItem />
          <NavItem />
          <NavItem />
          <NavItem />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
