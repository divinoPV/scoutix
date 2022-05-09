import React from 'react';

import style from './List.module.scss';

const List: React.FC<{
  classNameContainer?: string;
  classNameItem?: string;
  classNameList?: string;
  classNameTitle?: string;
  data: {
    description?: string,
    leading?: string,
    link?: string,
    id: number,
    image?: string,
    title: string,
  }[];
  title: string;
}> = (
  {
    classNameContainer = '',
    classNameItem = '',
    classNameList = '',
    classNameTitle = '',
    data,
    title,
  }
) => <div className={ `${ style['List'] } ${ classNameList }` }>
  <strong className={ `${ style['List__title'] }  ${ classNameTitle }` }>{ title }</strong>
  <div className={ `${ style['List__container'] }  ${ classNameContainer }` }>
    { data.map((
      {
        description,
        id,
        image,
        leading,
        link = '#',
        title,
      }
    ) => <a
      className={ `${ style['List__item'] } ${ classNameItem }` }
      href={ link }
      key={ id }
    >
      { image && <div className={ `${style['List__item__image']}` }>
        <img alt={ title } src={ image } />
      </div> }
      <div>
        { leading && <span>{ leading }</span> }
        <strong>{ title }</strong>
        { description && <p>{ description }</p> }
      </div>
    </a>) }
  </div>
</div>;

export default List;
