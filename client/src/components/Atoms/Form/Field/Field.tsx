import React from 'react';
import { Field as FormikField } from 'formik';

import style from './Field.module.scss';

const Field: React.FC<{
  control?: string;
  name?: string;
}> = (
  {
    control,
    name,
    ...rest
  }
) => <FormikField
  { ...rest }
  as={ control }
  className={ `${ style['Field'] }` }
  id={ name }
  name={ name }
/>;

export default Field;
