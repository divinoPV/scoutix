import React from 'react';
import { Link } from 'react-router-dom';

const Item: React.FC<{
  classNameElement?: string;
  classNameLink?: string;
  path: string;
}> = (
  {
    children,
    classNameElement = '',
    classNameLink = '',
    path
  }
) => <li
  className={ `${ classNameElement }` }
>
  <Link className={ `${ classNameLink }` } to={ path }>
    { children }
  </Link>
</li>;

export default Item;
