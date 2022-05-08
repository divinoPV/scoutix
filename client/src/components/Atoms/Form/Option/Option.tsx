import React from 'react';

const Option: React.FC<{
  value: string;
}> = (
  {
    value,
    children,
    ...rest
  }
) => <option value={ value } { ...rest }>
  { children }
</option>;

export default Option;
