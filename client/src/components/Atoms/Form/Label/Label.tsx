import React from 'react';

const Label: React.FC<{
  label: string;
  name: string;
}> = (
  {
    label,
    name,
  }
) => <label htmlFor={ name }>
  { label }
</label>;

export default Label;
