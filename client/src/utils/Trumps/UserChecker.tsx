import React from 'react';

type Props = {
  children: JSX.Element,
};

const UserChecker: React.FC<Props> = ({ children }) => <div>
  { { children } }
</div>;

export default UserChecker;
