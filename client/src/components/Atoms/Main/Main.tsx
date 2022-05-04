import React from 'react';

import styles from './Main.module.scss';

const Main: React.FC<{
  className?: string;
}> = ({
  children,
  className = '',
}) => <main
  className={ `${ styles['Main'] } ${ className }` }
>
  { children }
</main>;

export default Main;
