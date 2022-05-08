import axios from '../../../../utils/Axios/axios';
import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';

import style from './Login.module.scss';

import Authentication from '../../../Templates/Authentication/Authentication';
import FormControl from '../../../Trumps/Factory/FormControl';
import FormBtn from '../../../Atoms/Button/Form/FormBtn';
import {
  Store,
  useAppDispatch,
  useAppSelector
} from '../../../../utils/Redux/store';
import { set, login } from '../../../../utils/Redux/Slice/User';

const Login: React.FC = () => {
  const [user, setUser] = useState({ id: null, email: '', password: '' });

  const [error, setError] = useState('');

  const selector = useAppSelector((state: Store) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.id) {
      axios.get(
        `users/${ user.id }`,
        {
          headers: {
            'Authorization': `Bearer ${ localStorage.getItem('token') }`
          }
        }
      )
        .then((response) => {
          dispatch(set(response.data));
        })
        .catch((error) => {
          setError(error.response.data.message);
        });
    }
  }, [user]);

  return selector.logged
    ? <Navigate to="/" />
    : <Authentication>
      <video
        autoPlay
        className={ ` ${ style['Login__form__video'] } ` }
        loop
        muted
        id="login__video"
      >
        <source src="/media/video/login_background.mp4" type="video/mp4" />
      </video>
      <div className={ `${ style['Login__form'] }` }>
        <strong className={ `${ style['Login__form__title'] }` }>
          Bienvenue sur Scoutix !
        </strong>
        <Formik
          initialValues={ { email: '', password: '' } }
          validationSchema={ Yup.object({
            email: Yup
              .string()
              .email('Le format de l\'email est invalide')
              .required('Vous devez saisir une adresse email'),
            password: Yup
              .string()
              .required('Vous devez saisir votre mot de passe')
          }) }
          onSubmit={ () => {
            axios
              .post(
                'authentication_token',
                {
                  username: user.email,
                  password: user.password
                },
              )
              .then((response) => {
                localStorage.setItem('token', response.data.token);
                setUser({ ...user, id: response.data.id });
                dispatch(login());
              })
              .catch((error) => {
                setError(error.response.data.message);
              });
          } }
        >
          { formik => <Form className={ `${ style['Login__form__container'] }` }>
            <FormControl
              className={ `${ style['Login__form__field'] }` }
              control="input"
              label="Adresse email"
              name="email"
              onInput={ (e: any): void => setUser({
                ...user,
                email: e.target.value
              }) }
              type="email"
            />
            <FormControl
              className={ `${ style['Login__form__field'] }` }
              control="input"
              label="Mot de passe"
              name="password"
              onInput={ (e: any): void => setUser({
                ...user,
                password: e.target.value
              }) }
              type="password"
            />
            <FormBtn
              className={ `${ style['Login__form__submit'] }` }
              disabled={ !formik.isValid }
              type="submit"
            >
              Envoyer
            </FormBtn>
          </Form> }
        </Formik>
        { error && <span>{ error }</span> }
      </div>
    </Authentication>;
};

export default Login;
