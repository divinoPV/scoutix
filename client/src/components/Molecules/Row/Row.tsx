import React from 'react';

const Row: React.FC<{
  children: React.ReactNode | string;
  className?: string;
}> = ({ children , className }) => {
  return <tr className={className}>{children}</tr>;
}

export default Row;

