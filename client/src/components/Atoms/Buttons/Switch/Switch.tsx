import React, { useState } from 'react';

import { useFirstEffect } from '../../../Trumps/Helper/Hooks/Hooks';

import classes from './_switch.module.scss';

const Switch: React.FC<{
  isOn?: boolean;
  onChange: (value: boolean) => void;
}> = ({ isOn = false, onChange }) => {
  const [checked, setChecked] = useState<boolean>(isOn);

  const handleChange = () => {
    setChecked(!checked);
  };

  useFirstEffect(
    () => {
      onChange(checked);
    },
    [checked],
  );

  return <label className={`${classes['switch']}`}>
    <input type="checkbox" className={`${classes['field']}`}
      onInput={() => handleChange()} defaultChecked={isOn}/>
    <span className={`${classes['slider']} ${classes['round']}`}></span>
  </label>
};

export default Switch;
