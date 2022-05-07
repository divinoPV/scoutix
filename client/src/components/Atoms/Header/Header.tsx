import React from 'react';

import style from './Header.module.scss';

const Header: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <header
  className={ `${ style['Header'] } ${ className }` }
>
  <div className={ `${ style['Header__container'] } ${ className }` }>
    { children }
  </div>
</header>;

export default Header;
