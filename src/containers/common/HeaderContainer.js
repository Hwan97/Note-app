import React, { Component } from 'react';
import Header from 'components/common/Header';
// import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as baseActions from 'store/modules/base';

class HeaderContainer extends Component {
  handleLoginClick = async () => {
    const { BaseActions  } = this.props;
    BaseActions.showModal('login');
  }
  render() {
    const { handleLoginClick } = this;
    // const { logged } = this.props;
    return (
      <Header onLoginClick={handleLoginClick}/>
    );
  }
}

// export default connect(
//   (state) => ({
//     // logged: state.base.get('logged')
//   }),
//   (dispatch) => ({
//     // BaseActions: bindActionCreators(baseActions, dispatch)
//   })
// )(HeaderContainer);
