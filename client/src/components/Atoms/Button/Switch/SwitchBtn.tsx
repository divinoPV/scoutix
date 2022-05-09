import React, { useState } from 'react';

import style from './SwitchBtn.module.scss';

import useFirstEffect from '../../../Trumps/Helper/Hook//FirstEffect';

const SwitchBtn: React.FC<{
  isOn?: boolean;
  onChange: (value: boolean) => void;
}> = (
  {
    isOn = false,
    onChange
  }
) => {
  const [checked, setChecked] = useState<boolean>(isOn);

  useFirstEffect(() => onChange(checked), [checked]);

  return <label className={ `${ style['Switch'] }` }>
    <input
      className={ `${ style['Switch__field'] }` }
      onInput={ () => setChecked(!checked) } defaultChecked={ isOn }
      type="checkbox"
    />
    <span className={ `${ style['Switch__slider'] } ${ style['Switch__round'] }` }></span>
  </label>;
};

export default SwitchBtn;
