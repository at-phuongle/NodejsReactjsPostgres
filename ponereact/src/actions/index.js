import * as types from '../constans/actionTypes';

export const listAll = () => {
  return {
    type: types.LIST_ALL_BLOG
  }
};
export const logout = () => {
  return {
    type: types.LOGOUT
  }
};
export const createAccount = (account) => {
  return {
    type: types.CREATE_ACCOUNT,
    account
  }
};
export const createBlog = (blog) => {
  return {
    type: types.CREATE_BLOG,
    blog
  }
};
export const likeBlog = (id) => {
  return {
    type: types.LIKE_BLOG,
    id
  }
};
