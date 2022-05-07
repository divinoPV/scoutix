import React from 'react';

const Nav: React.FC<{
  className: string;
}> = ({
  children,
  className = '',
}) => <nav
  className={ `${ className }` }
>
  { children }
</nav>;

export default Nav;
