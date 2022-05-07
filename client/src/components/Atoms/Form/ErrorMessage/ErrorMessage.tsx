import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';

const ErrorMessage: React.FC<{
  name?: string;
}> = (
  {
    name = ''
  }
) => <FormikErrorMessage name={ name } />;

export default ErrorMessage;
