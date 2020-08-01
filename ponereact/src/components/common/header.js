import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
// import imgLogo from '../../asets/images/logo.jpg';

function Header(props) {
  let onHandleLogout = () => {
    props.onLogout();
  }
  let renderAccount;
  if (props.userLogin != '' && props.userLogin.role == '1') {
    renderAccount =
      <ul className="account">
        <li>
          <ul>
            <li className="account-item"><Link to="/login" onClick={onHandleLogout}>Logout</Link></li>
            <li className="account-item user-name">(<Link to={`/${props.userLogin.id}/editAccount`}>{props.userLogin.name}</Link></li>
            <li className="message">
              <Link to={`/`}><i className="fa fa-comments"></i></Link>
              <span className="message-number" id="js-count">000</span>)
        </li>
          </ul>
        </li>
      </ul>

  } else if (props.userLogin != '' && props.userLogin.role == '0') {
    renderAccount =
      <ul className="account">
        <li className="account-item"><Link to="/login" onClick={onHandleLogout}>Logout</Link></li>
        <li className="account-item user-name"><Link to={`/${props.userLogin.id}/editAdmin`}>({props.userLogin.name})</Link></li>
      </ul>
  }
  else {
    renderAccount =
      <ul className="account">
        <li className="account-item account-item-left">
          <Link to="/register">Register</Link>
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
  }
  return (

    <header>
      <section className="header-top">
        <div className="container">
          <div className="header-top-wrap">
            <div className="header-top-item">
              <div className="page-title">
                <Link className="logo" to="/">
                  {/* <img src={imgLogo} alt="logo" /> */}
                </Link>
                <span className="page-title-text"><Link className="logo" to="/">PONE</Link></span>
              </div>
              <span className="page-des shining-text">Save and share your life</span>
            </div>
            <div className="header-top-item">
              {renderAccount}
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
    cart: state.cart
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
