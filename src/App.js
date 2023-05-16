import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadUsers} from "./store/users/user-actions";
import {loadTodos} from "./store/todos/todos-action";

import {UserList} from "./components/UserList";
import {TodosList} from "./components/TodosList";

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadTodos())
  }, []);

  return (
    <div className="App">
      <UserList />
      <TodosList />
    </div>
  );
}

export default App;
