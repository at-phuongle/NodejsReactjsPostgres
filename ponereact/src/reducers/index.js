import { combineReducers } from 'redux';
import blog from './blog'
import users from './users'
import userLogin from './userLogin'
import likeBlog from './likeBlog';

const myReducer = combineReducers({
  blog: blog,
  users: users,
  userLogin: userLogin,
  likeBlog: likeBlog
})
export default myReducer;
