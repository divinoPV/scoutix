import React from 'react';

import style from './SwitchTable.module.scss';

import SwitchBtn from '../../../Atoms/Button/Switch/SwitchBtn';

const SwitchTable: React.FC<{
  className?: string;
  data: {
    body: Array<object>;
    header: Array<object>;
  };
  horizontalHeaderLabel: string;
  verticalHeaderLabel: string;
  callback: (value: object, value2: object) => void;
  constraint: (value: object, value2: object) => boolean;
}> = (
  {
    className = '',
    data,
    horizontalHeaderLabel,
    verticalHeaderLabel,
    callback,
    constraint,
  }
) => {
  return <div className={ `${ style['SwitchTable'] } ${ className }` }>
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
        { data.header.map((head) => <div
          className={ `${ style['SwitchTable__cell'] }` }
        >
          <SwitchBtn
            onChange={() => callback(item, head)}
            isOn={constraint(item, head)}
          />
        </div>) }
      </div>) }
    </div>
  </div>;
}

export default SwitchTable;
