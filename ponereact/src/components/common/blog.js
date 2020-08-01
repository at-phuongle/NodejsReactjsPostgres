import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

function Blog(props) {
  let [valueInput, setValueInput] = useState('');
  let userLogin = props.userLogin;

  function handleInput(e) {
    setValueInput(e.target.value);
  }

  function handleCreateStatus(e) {
    if (!userLogin) {
      alert('Please login!');
    }
    else if (valueInput === '') {
      alert('Please input something!');
    }
    else {
      const newBlog = { idUser: userLogin.id, time: '19:29:39', userName: props.userLogin.name, content: valueInput }
      props.onCreateBlog(newBlog);
      setValueInput('');
    }
  }
  return (
    <section className="section-status-wrap">
      <div className="inp-box">
        <input className="input-content" type="text"
          placeholder="What are you thinking?"
          value={valueInput} onChange={handleInput} 
        />
        <div className="status-action">
          <div className="status-action-left">
            <i className="fa fa-camera"></i>
            <i className="fa fa-play"></i>
            <i className="fa fa-link"></i>
          </div>
          <div className="status-action-right">
            <Link
              to={`/`}
              className="btn btn-border"
              onClick={handleCreateStatus}
            >Post</Link>
            <Link
              to={`/`}
              className="btn"
            >Share</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userLogin: state.userLogin,
    blog: state.blog
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onCreateBlog: (blog) => {
      dispatch(actions.createBlog(blog));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
