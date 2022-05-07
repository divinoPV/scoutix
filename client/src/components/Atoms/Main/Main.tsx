import React from 'react';

import style from './Main.module.scss';

const Main: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <main
  className={ `${ style['Main'] } ${ className }` }
>
  { children }
</main>;

export default Main;
