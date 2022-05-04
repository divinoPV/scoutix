import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

import Footerom from '../../../Atoms/Footer/Footer';
import Navbar from '../../../Molecules/Nav/App/Footer/Navbar';

const Footer: React.FC = () => <Footerom
  className={ `${ styles['Footer'] }` }
>
  <div className={ `${ styles['Footer__information'] }` }>
    <div className={ `${ styles['Footer__logoLink'] }` }>
      <object data="/media/svg/logo_white.svg" type="image/svg+xml" />
      <Link to="/" />
    </div>
    <div className={ `${ styles['Footer__headquartersAddress'] }` }>
      <strong className={ `${ styles['Footer__headquarters'] }` }>Siége social</strong>
      <a className={ `${ styles['Footer__address'] }` } href={
        'https://www.google.com/maps/place/Tour+Montparnasse/'
        + '@48.8421414,2.3197627,17z/data=!3m1!4b1!4m5!3m4!'
        + '1s0x47e671ccae002451:0xfc04ff9c1b1c593c!8m2!3d48'
        + '.8421379!4d2.3219514'
      }>
        33 Av. du Maine, 75015 Paris
      </a>
    </div>
  </div>
  <div className={ `${ styles['Footer__fa__container'] }` }>
    <FontAwesomeIcon className={ `${ styles['Footer__fa'] }` } icon={ faFacebook } />
    <FontAwesomeIcon className={ `${ styles['Footer__fa'] }` } icon={ faTwitter } />
    <FontAwesomeIcon className={ `${ styles['Footer__fa'] }` } icon={ faLinkedin } />
    <FontAwesomeIcon className={ `${ styles['Footer__fa'] }` } icon={ faYoutube } />
  </div>
  <Navbar />
</Footerom>;

export default Footer;
