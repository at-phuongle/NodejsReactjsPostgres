import * as types from '../constans/actionTypes';

var initialState = [
  { id: 2, role: 1, name: 'Nguyen Huynh', address: '23 Ton Dan, Da Nang', phoneNumber: '0909090909', username: 'user2', password: 'user2', rePassword: 'user2' },
  { id: 1, role: 1, name: 'Le Van Minh', address: '100 Dien Bien Phu, Da Nang', phoneNumber: '0935353535', username: 'user1', password: 'user1', rePassword: 'user1' },
  ];

let getUsers = JSON.parse(localStorage.getItem('users'));
if (getUsers) {
  initialState = getUsers;
} else {
  localStorage.setItem('users', JSON.stringify(initialState));
}

function randomId() {
  return Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10) + ""
    + Math.floor(Math.random() * 10);
}

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL_USER:
      return state;
    case types.CREATE_ACCOUNT:
      var newAccount = {
        id: parseInt(randomId()),
        role: 1,
        name: action.account.name,
        address: action.account.address,
        phoneNumber: action.account.phoneNumber,
        username: action.account.username,
        password: action.account.password,
        rePassword: action.account.rePassword,
      };
      state.push(newAccount);
      localStorage.setItem('users', JSON.stringify(state));
      return [...state];
    case types.EDIT_ACCOUNT:
      state = state.map((user) => {
        if (user.id === action.account.id) {
          return {
            ...user,
            name: action.account.name,
            address: action.account.address,
            phoneNumber: action.account.phoneNumber
          };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default myReducer;
