import { useState } from "react";
import "./Card.css";
import EditTodoForm from "./EditTodoForm";

function Card({ text, id, deleteTodo, editTodo, isEditing, updateTodo, completed,handleToggleTodo}) {
  const [onEdit,setOnEdit] = useState(false)
  const className = completed ? 'conditional-style' : 'default-style';

  return (
    <>
      {onEdit ? (
        <EditTodoForm text={text} updateTodo={updateTodo} id={id}  setOnEdit={setOnEdit} onEdit={onEdit}  editTodo={editTodo}/>
      ) : (
        <div className="card-container">
          <div className="write-here" >
            {/* <p style={{ color: completed ? 'grey' : 'none' }}>{text}</p> */}
            <p className={className}>{text}</p>
          </div>
          <input
              type="checkbox"
              className="delete"
              id= "checkBox"
              checked={completed}
              onChange={() => handleToggleTodo(id)}
            />
          <div className="delete" onClick={() => setOnEdit(!onEdit)}>
            <img src="./src/Components/images/edit-fill.svg" />
          </div>
          <div className="delete" onClick={() => deleteTodo(id)}>
            <img src="./src/Components/images/delete-outline.svg" />
          </div>
        </div>
      )}
      {/* {isEditing ? (
        <EditTodoForm text={text} updateTodo={updateTodo} id={id} />
      ) : (
        <div className="card-container">
          <div className="write-here">
            <p>{text}</p>
          </div>
          <div className="delete" onClick={() => editTodo(id)}>
            <img src="./src/Components/images/edit-fill.svg" />
          </div>
          <div className="delete" onClick={() => deleteTodo(id)}>
            <img src="./src/Components/images/delete-outline.svg" />
          </div>
        </div>
      )} */}
    </>
  );
}

export default Card;
