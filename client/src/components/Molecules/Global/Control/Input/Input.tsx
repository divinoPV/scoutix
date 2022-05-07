import React from 'react';

import style from './Input.module.scss';

import ErrorMessage from '../../../../Atoms/Form/ErrorMessage/ErrorMessage';
import Field from '../../../../Atoms/Form/Field/Field';

const Input: React.FC<{
  className?: string;
  control?: string;
  label?: string;
  name?: string;
}> = (
  {
    control,
    label,
    name,
    ...rest
  }
) => <div className={ `${ style['Input'] }  ${ rest.className }` }>
  <label className={ `${ style['Input__label'] }` }>
    { label }
    <Field { ...rest } control={ control } name={ name } />
  </label>
  <span className={ `${ style['Input__error'] }` }>
    <ErrorMessage name={ name } />
  </span>
</div>;

export default Input;
