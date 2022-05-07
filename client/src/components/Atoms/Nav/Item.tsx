import React from 'react';
import { Link } from 'react-router-dom';

const Item: React.FC<{
  classNameList?: string;
  classNameLink?: string;
  path: string;
}> = ({
  children,
  classNameList = '',
  classNameLink = '',
  path
}) => <li
  className={ `${ classNameList }` }
>
  <Link className={ `${ classNameLink }` } to={ path }>
    { children }
  </Link>
</li>;

export default Item;
