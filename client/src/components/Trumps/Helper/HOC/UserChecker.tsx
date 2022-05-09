import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../../../utils/Axios/axios';
import { set } from '../../../../utils/Redux/Slice/User';
import { useAppDispatch } from '../../../../utils/Redux/store';

const UserChecker: React.FC = (
  {
    children,
  }
) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const userState = localStorage.getItem('userState')
    && JSON.parse(localStorage.getItem('userState') as string)
  ;

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (userState && token) {
      axios
        .get(`users/${ userState.id }`)
        .then((response) => {
          dispatch(set(response.data));
        })
        .catch(() => {
          navigation('/');
        });
    } else {
      navigation('/');
    }
  }, []);

  return <>{ children }</>;
};

export default UserChecker;
