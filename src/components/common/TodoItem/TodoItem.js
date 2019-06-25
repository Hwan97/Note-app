import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
      const { done, children, onToggle, onRemove} = this.props; // 다음값들을 프롭스로 받아옴. 

  return (
    <div className={cx('note-item')} onClick={onToggle}>
      <input className={cx('tick')} type="checkbox" checked={done} readOnly />
      <div className={cx('text', {done})}> {children} </div>
      <div className={cx('delete')} onClick={onRemove}>지우기</div>
    </div>
  );
 }
}

export default TodoItem;
