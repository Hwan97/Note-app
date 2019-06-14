import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <Link to="/">Note</Link>
    </div>
    <div className={cx('right-btn')}>
      오른쪽
    </div>
   </header>
);

export default Header;
