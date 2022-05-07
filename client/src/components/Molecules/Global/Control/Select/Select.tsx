import React from 'react';

import ErrorMessage from '../../../../Atoms/Form/ErrorMessage/ErrorMessage';
import Field from '../../../../Atoms/Form/Field/Field';
import Option from '../../../../Atoms/Form/Option/Option';

const Select: React.FC<{
  label?: string;
  name?: string;
  options?: {
    id: number,
    slug: string,
    name: string,
  }[];
  labelClassName?: string;
}> = (
  {
    label,
    labelClassName,
    name,
    options,
    ...rest
  }
) => <div>
  <label className={ `${ labelClassName ?? '' }` }>
    { label }
    <Field control="select" name={ name } { ...rest }>
      <Option value="">Tout</Option>
      { options && options.map(option => <Option
        key={ option.id }
        value={ option.slug }
      >
        { option.name }
      </Option>) }
    </Field>
  </label>
  <ErrorMessage name={ name } />
</div>;

export default Select;
