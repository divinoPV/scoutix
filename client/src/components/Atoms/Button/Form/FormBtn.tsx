import React from 'react';

import style from './FormBtn.module.scss';

const ButtonForm: React.FC<{
  disabled?: boolean;
  className?: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}> = (
  {
    children,
    className = '',
    ...rest
  }
) => <button
  { ...rest }
  className={ ` ${ style['FormBtn'] }  ${ className } ` }
>
  { children }
</button>;

export default ButtonForm;
