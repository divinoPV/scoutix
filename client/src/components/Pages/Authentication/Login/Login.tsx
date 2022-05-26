import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';

import style from './Login.module.scss';

import axios from '../../../../utils/Axios/axios';
import Authentication from '../../../Templates/Authentication/Authentication';
import FormControl from '../../../Trumps/Factory/FormControl';
import FormBtn from '../../../Atoms/Button/Form/FormBtn';
import {
  Store,
  useSelectorook
} from '../../../../utils/Redux/store';
import { set, login } from '../../../../utils/Redux/Slice/user';
import useDispatch from '../../../Trumps/Hook/Dispatch';
import toast from '../../../../utils/Toast/default';

const Login: React.FC = () => {
  const [userForm, setUserForm] = useState({
    id: null,
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const user = useSelectorook((state: Store) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.logged) {
      toast(`Bienvenue ${ user.username } 👋 !`, 'success');
    }
  }, [user])

  return user.logged
    ? <Navigate to="/changement-de-scope" />
    : <Authentication>
      <video
        autoPlay
        className={ ` ${ style['Login__form__video'] } ` }
        id="login__video"
        loop
        muted
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
          onSubmit={ async () => {
            try {
              const { id, token } = (await axios.post(
                'authentication_token',
                {
                  username: userForm.email,
                  password: userForm.password
                },
              )).data;

              localStorage.setItem('token', token);

              try {
                dispatch(set((await axios.get(`users/${ id }`))?.data), login());
              } catch (error: any) {
                setError(error.message);
              }
            } catch (error: any) {
              setError(error.message);
            }
          } }
        >
          { formik => <Form className={ `${ style['Login__form__container'] }` }>
            <FormControl
              className={ `${ style['Login__form__field'] }` }
              control="input"
              label="Adresse email"
              name="email"
              onInput={ (e: any): void => setUserForm({
                ...userForm,
                email: e.target.value
              }) }
              type="email"
            />
            <FormControl
              className={ `${ style['Login__form__field'] }` }
              control="input"
              label="Mot de passe"
              name="password"
              onInput={ (e: any): void => setUserForm({
                ...userForm,
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
