import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationSelector, notificationAction } from "../../redux/reducers/notificationReducer";
import { todoAction } from "../../redux/reducers/todoReducer";
// import {addTodo} from "../../redux/actions/todoActions";

import styles from "./ToDoForm.module.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  var message = useSelector(notificationSelector)

  if (message) {
    setTimeout(() => {
      disptach(notificationAction.reset())
    }, 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(todoAction.add(todoText));


  };

  return (
    <div className={styles.container}>
      {message &&

        <div className="alert alert-success" role="alert">
          {message}
        </div>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default ToDoForm;