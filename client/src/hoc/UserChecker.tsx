import React from 'react';

type Props = {
  children: JSX.Element,
};

const UserChecker:React.FC<Props> = ({ children }) => {
  return (
    <div>{{ children }}</div>
  );
}

export default UserChecker;
