import { useEffect, useRef, useState } from "react";

function EditTodoForm({ text, id, updateTodo, setOnEdit, onEdit,editTodo,  }) {
  useEffect(() => {
    myref.current.focus();
  }, []);
  const myref = useRef();
  // const [inputText, setInputText] = useState(text);
  const[newVal, setNewVal] = useState (text);
  return (
    <div className="top top1">
      <input
        ref={myref}
        type="text"
        className="left left1"
        id="left1"
        // defaultValue={text}
        value={newVal}
        onChange={(e) => setNewVal(e.target.value)}
      />
      <div className="right right1" id="right1" onClick={() => {setOnEdit(!onEdit); editTodo(id,newVal)}}>
        <h2>Update</h2>
      </div>
    </div>
  );
}

export default EditTodoForm;
