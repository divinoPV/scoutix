import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <header
  className={ `${ styles['Header'] } ${ className }` }
>
  <div className={ `${ styles['Header__container'] } ${ className }` }>
    { children }
  </div>
</header>;

export default Header;
