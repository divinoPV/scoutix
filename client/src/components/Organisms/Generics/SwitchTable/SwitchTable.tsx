import React from 'react';

import style from './SwitchTable.module.scss';

import Switch from '../../../Atoms/Buttons/Switch/Switch';

const SwitchTable: React.FC<{
  className?: string;
  data: {
    body: { id: number, name: string, }[];
    header: { id: number, name: string, }[];
  };
  horizontalHeaderLabel: string;
  verticalHeaderLabel: string;
}> = (
  {
    className = '',
    data,
    horizontalHeaderLabel,
    verticalHeaderLabel,
  }
) => <div className={ `${ style['SwitchTable'] } ${ className }` }>
  <div className={ `${ style['SwitchTable__header'] }` }>
    <div className={ `${ style['SwitchTable__cell'] } ${ style['SwitchTable__cell--info'] }` }>
      <div className={ `${ style['SwitchTable__cell--info__vertical'] }` }>
        <span>{ verticalHeaderLabel }</span>
      </div>
      <div className={ `${ style['SwitchTable__cell--info__horizontal'] }` }>
        <span>{ horizontalHeaderLabel }</span>
      </div>
    </div>
    { data.header.map((item) => <div
      className={ `${ style['SwitchTable__cell'] }` }
      key={ item.id }
    >
      <span>{ item.name }</span>
    </div>) }
  </div>
  <div className={ `${ style['SwitchTable__body'] }` }>
    { data.body.map((item) => <div
      className={ `${ style['SwitchTable__rows'] }` }
      key={ item.id }
    >
      <div className={ `${ style['SwitchTable__cell'] }` }>
        <span>{ item.name }</span>
      </div>
      { data.header.map(() => <div
        className={ `${ style['SwitchTable__cell'] }` }
      >
        <Switch onChange={ () => '' } />
      </div>) }
    </div>) }
  </div>
</div>;

export default SwitchTable;
