import React from 'react';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { sha256 } from 'js-sha256';
import * as Yup from 'yup';

import style from './Login.module.scss';

import Authentication from '../../../Templates/Authentication/Authentication';
import FormControl from '../../../Trumps/Factory/FormControl';
import FormBtn from '../../../Atoms/Button/Form/FormBtn';

const Login: React.FC = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  return <Authentication>
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
        onSubmit={ (e: any): void => e.preventDefault() }
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
              password: sha256(e.target.value)
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
    </div>
  </Authentication>;
};

export default Login;
