import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { key } from '../../../utils/Storage/scoporage';
import { Store, useSelectorook } from '../../../utils/Redux/store';
import toast from '../../../utils/Toast/default';

const Scopecker: React.FC = (
  {
    children,
  }
) => {
  const navigation = useNavigate();

  const user = useSelectorook((state: Store) => state.user);

  const scope = localStorage.getItem(key)
    && JSON.parse(localStorage.getItem(key) as string)
  ;

  useEffect(() => {
    !['/deconnexion', '/changement-de-scope'].includes(location.pathname)
    && user.logged
    && 0 === scope?.id
    && toast('Vous devez choisir un scope pour continuer', 'error')
    && navigation('/changement-de-scope')
  }, [user.logged, location.pathname]);

  return <>
    { children }
  </>;
};

export default Scopecker;
