import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <footer
  className={ `${ styles['Footer'] } ${ className }` }
>
  { children }
</footer>;

export default Footer;
