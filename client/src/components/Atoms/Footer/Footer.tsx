import React from 'react';

import style from './Footer.module.scss';

const Footer: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <footer
  className={ `${ style['Footer'] } ${ className }` }
>
  { children }
</footer>;

export default Footer;
