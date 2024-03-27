import { useReducer, useState } from "react";
import Card from "./Card";
import "./Todo-list.css";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: state.length, text: action.payload, completed: false }];
    case "editTodo":
      return state.map((e) => {
        if (e.id === action.id) {
          e.text = action.payload;
          return e;
        } else {
          return e;
        }
      });
    case "deleteTodo":
      return state.filter((e) => e.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, []);
  const [inputText, setInputText] = useState("");


  const createTodo = () => {
    dispatch({ type: "addTodo", payload: inputText });
    setInputText("");
  };

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", id: id });
  };
  const editTodo = (id, value) => {
    dispatch({ type: "editTodo", id: id, payload: value });
  };

  const handleToggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };


  return (
    <div className="background">
      <div className="white-container">
        <div className="content-holder">
          <div className="top">
            <input
              type="text"
              className="left"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="right" onClick={createTodo}>
              <h2>Add</h2>
            </div>
          </div>
          <div className="bottom">
            {state.map((e) => (
              <Card
                key={e.id}
                text={e.text}
                id={e.id}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                handleToggleTodo = {handleToggleTodo}
                completed={e.completed}
                // editTodo = {editTodo}
                // isEditing={e.isEditing}
                // updateTodo={updateTodo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
