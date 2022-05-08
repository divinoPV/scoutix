import React from 'react';

import Checkbox from '../../Molecules/Global/Control/Checkbox/Checkbox';
import Date from '../../Molecules/Global/Control/Date/Date';
import Input from '../../Molecules/Global/Control/Input/Input';
import Radio from '../../Molecules/Global/Control/Radio/Radio';
import Select from '../../Molecules/Global/Control/Select/Select';

const FormControl: React.FC<{
  className?: string;
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
  label: string;
  name: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}> = (
  {
    control,
    ...rest
  }
) => ({
  'input': <Input { ...rest } />,
  'textarea': <Input { ...rest } control="textarea" />,
  'select': <Select { ...rest } />,
  'radio': <Radio { ...rest } />,
  'checkbox': <Checkbox { ...rest } />,
  'date': <Date { ...rest } />,
}[control]);

export default FormControl;
