import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = ({onLoginClick}) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <h3 className={cx('header-title')}>My Note App</h3>      
      <span onClick={onLoginClick} className={cx('login-form')}>로그인</span>
    </div>
   </header>
);

export default Header;
