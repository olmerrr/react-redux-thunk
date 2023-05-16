import {useSelector} from "react-redux";

export const TodosList = () => {
  const {list: todos, status, error} = useSelector(state => state.todos);
  return <div>
    <p>Todos: {todos.length}</p>
    <p>Status: {status}</p>
    { error &&
      <p>Error: {error}</p>
    }
  </div>
}