import React from 'react';

const Loading: React.FC = (
  {
    children
  }
) => <React.Suspense fallback={ <div>loading...</div> }>
  { children }
</React.Suspense>;

export default Loading;
