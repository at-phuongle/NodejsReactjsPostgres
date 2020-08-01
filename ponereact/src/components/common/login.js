import React, { Component, useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../../actions/index';

function Login(props) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }

  let login = () => {
    const userLogin = props.users.find(item => item.username === username && item.password === password);
    if (userLogin) {
      sessionStorage.setItem('userLogin', JSON.stringify(userLogin));
      console.log(userLogin.role);
      if (userLogin.role === 1) {
        window.location.href = "/";
        console.log('user');
      } else {
        window.location.href = "/admin";
        console.log('admin');
      }
    } else {
      alert('Username or password incoress!');
    }
  }

  return (
    <main className="main-content">
      <div className="container">
        {/* <h3 className="section-title">Login</h3> */}
        <form className="form-login">
          <div className="row form-item">
            <input className="inp-item" type="text" placeholder="username" name="username" value={username} onChange={handleChangeInput}></input>
            <i className="fa fa-envelope"></i>
          </div>
          <div className="row form-item">
            <input className="inp-item" type="password" placeholder="password" name="password" value={password} onChange={handleChangeInput}></input>
            <i className="fa fa-lock"></i>
          </div>
          <div className="form-btn">
              <button className="btn btn-login" id="js-btn-submit" onClick={login} type="button">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
};
export default connect(mapStateToProps, null)(Login);
