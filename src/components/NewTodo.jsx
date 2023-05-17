import {useDispatch} from "react-redux";
import {createTodo} from "../store/todos/todos-actions";
export const NewTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTodo(event.target.title.value))
    event.target.reset();
  }
  const handlePressEnter = (event) => {
    if (event.target.key === "Enter") {
      handleSubmit(event)
    }
  }

  return <div className="new-todo">
    <form action="" onSubmit={handleSubmit} onChange={handlePressEnter}>
      <input type="text" placeholder="Todo"/>
      <input type="submit" value="Add Todo"/>
    </form>
  </div>
}