import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../../utils/Axios/axios';
import { key } from '../../../utils/Storage/userorage';
import { set } from '../../../utils/Redux/Slice/user';
import useDispatch from '../Hook/Dispatch';

const Userecker: React.FC = (
  {
    children,
  }
) => {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  const user = localStorage.getItem(key)
    && JSON.parse(localStorage.getItem(key) as string)
  ;

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (user && token) {
      axios
        .get(`users/${ user.id }`)
        .then((response) => {
          dispatch(set(response.data));
        })
        .catch(() => {
          navigation('/');
        });
    } else if ('/connexion' !== location.pathname) {
      navigation('/');
    }
  }, []);

  return <>{ children }</>;
};

export default Userecker;
