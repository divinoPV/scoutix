import React from 'react';

const Link: React.FC<{
  href?: string;
}> = ({
  children = 'Lien',
  href = '#',
}) => <a href={ href } target="_blank">
  { children }
</a>;

export default Link;
