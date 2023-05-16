import {client} from "../../api";
// constants
export const ADD_USERS = "ADD_USERS";

// actions
const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users
});

export const loadUsers = () => (dispatch) => {
  client.get('https://jsonplaceholder.typicode.com/users/')
    .then(data => dispatch(addUsers(data)))
    .catch(err => console.error(err))

}