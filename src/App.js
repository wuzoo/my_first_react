import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [...currentArray, toDo]);
  };
  const deleteBtn = (index) => {
    setToDos((curToDos) =>
      curToDos.filter((_, curindex) => curindex !== index)
    );
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do...."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return (
            <div>
              <li key={index}>{item}</li>
              <button onClick={() => deleteBtn(index)}>X</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
