import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle: React.FC<{
  className?: string;
}> = ({
  children,
  className= '',
}) => <h1
  className={ `${styles['PageTitle']} ${ className }` }
>
  { children }
</h1>;

export default PageTitle;
