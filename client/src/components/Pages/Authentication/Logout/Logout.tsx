import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { reset as userReset } from '../../../../utils/Redux/Slice/user';
import { reset as scopeReset } from '../../../../utils/Redux/Slice/scope';
import toast from '../../../../utils/Toast/default';
import useDispatch from '../../../Trumps/Hook/Dispatch';
import { Store, useSelectorook } from '../../../../utils/Redux/store';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelectorook((state: Store) => state.user);

  useEffect(() => {
    toast(`À bientôt ${ user.username } 👋 !`, 'success');
    dispatch(userReset(), scopeReset());
    localStorage.clear();
    navigate('/');
  }, []);

  return <></>;
};

export default Logout;
