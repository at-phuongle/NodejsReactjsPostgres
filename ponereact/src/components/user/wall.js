import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ava1 from '../../asets/images/ava1.png';
import * as actions from '../../actions/index';

function Wall(props) {
  let arrStatus = props.blog;

  let onHandleLike = (e) => {
    props.onLikeBlog(e.target.value);
    // console.log(e.target.value);
    // let check = 0;
    //     listComment.map(
    //       listComment => {
    //         if (listComment.id_user === props.userLogin.id && listComment.id_product === product.id) {
    //           check = check + 1;
    //         }
    //       }
    //     )
    //     if (check !== 0) {
    //       alert('You have already commented on this product!');
    //       setContent('You have already commented on this product!');
    //     }
    //     else {
    //       const newComment = { id_product: product.id, id_user: props.userLogin.id, name_user: props.userLogin.name, content: content }
    //       props.onAddComment(newComment);
    //       setContent('');
    //     }
  }
  return (
    <section className="section-wall">
      <ul className="wall-list">
        {arrStatus.map((item, index) =>
          <li className="wall-item" key={index}>
            <div className="wall-top">
              <img src={ava1} alt="ava1" />
              <div className="wall-right">
                <Link to={`/`}>{item.userName}</Link>
                <p className="p-des">{item.time}</p>
              </div>
            </div>
            <div className="">
              {item.content}
            </div>
            <div className="t">
              <ul className="space-between">
                <li>
                  <button className="bgr-none" value={item.id} onClick={onHandleLike}>
                    <i className="fa fa-thumbs-up"></i>
                    {item.like}
                  </button>
                </li>
                <li>
                  <i className="fa fa-comment"></i>
                  <Link to="/login">{item.comment}</Link>
                </li>
                <li>
                  <i className="fa fa-share"></i>
                  <Link to={`/`}>Share</Link>
                </li>
                <li>
                  <i className="fa fa-bookmark"></i>
                  <Link to={`/`}>Save</Link>
                </li>
              </ul>
            </div>
          </li>
        )}
      </ul>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog,
    users: state.users
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onLikeBlog: (id) => {
      dispatch(actions.likeBlog(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wall);
