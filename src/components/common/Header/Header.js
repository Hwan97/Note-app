import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <h3 className={cx('header-title')}>My Note App</h3>
    </div>
   </header>
);

export default Header;
