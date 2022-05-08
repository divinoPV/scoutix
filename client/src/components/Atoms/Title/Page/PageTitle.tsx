import React from 'react';

import style from './PageTitle.module.scss';

const PageTitle: React.FC<{
  className?: string;
}> = (
  {
    children,
    className = '',
  }
) => <h1
  className={ `${ style['PageTitle'] } ${ className }` }
>
  { children }
</h1>;

export default PageTitle;
