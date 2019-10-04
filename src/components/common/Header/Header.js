import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = (onLogin) => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <h3 className={cx('header-title')}>My Note App</h3>      
      <span onClick={onLogin} className={cx('login-form')}>로그인</span>
    </div>
   </header>
);

export default Header;
