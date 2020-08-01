import * as types from '../constans/actionTypes';

var initialState = [
  { id: 1, userName: 'Bộ Y Tế', time: '12:20:45', content: 'ABCDEFGHIJKLMNOPQ', comment: 12, like: 19 },
  { id: 2, userName: 'Bộ Y Tế', time: '12:20:45', content: 'ABCDEFGHIJKLMNOPQ', comment: 12, like: 19 },
  { id: 3, userName: 'Bộ Y Tế', time: '12:20:45', content: 'ABCDEFGHIJKLMNOPQ', comment: 12, like: 19 }
];

let getBlog = JSON.parse(localStorage.getItem('Blog'));
if (getBlog) {
  initialState = getBlog;
} else {
  localStorage.setItem('Blog', JSON.stringify(initialState));
}

function randomId() {
  return Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10);
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL_BLOG:
      return state;
    case types.CREATE_BLOG:
      var newBlog = {
        id: parseInt(randomId()),
        userName: action.blog.userName,
        time: '28-08-2020 15:15:45',
        content: action.blog.content,
        like: 0,
        comment: 0
      };
      state.push(newBlog);
      localStorage.setItem('Blog', JSON.stringify(state));
      return [...state];
    case types.LIKE_BLOG:
      console.log(action.id);
      state.map(blog => {
        if (parseInt(blog.id) === parseInt(action.id)) {
          console.log(blog);
          return blog.like += 1;
        }
      });
      localStorage.setItem('Blog', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
