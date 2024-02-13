import "./App.css";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { TodosAtom, FilterTodosAtom } from "./store/atom/todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <ToDoInput></ToDoInput>
        <ShowToDo></ShowToDo>
        <Filter></Filter>
      </RecoilRoot>
    </>
  );
}

function ShowToDo() {
  const todos = useRecoilValue(TodosAtom);
  return todos.map((todo) => (
    <div key={todo.title}>
      <h1>Title - {todo.title}</h1>
      <p>Description - {todo.description}</p>
    </div>
  ));
}

function Filter() {
  let filterWord = "";
  let todos = useRecoilValue(TodosAtom);
  let setTodos = useSetRecoilState(FilterTodosAtom);
  let filterTodos = useRecoilValue(FilterTodosAtom);

  return (
    <div>
      <input
        placeholder="Enter a filter"
        onChange={(event) => {
          filterWord = event.target.value;
        }}
      ></input>
      <button onClick={() => FilterSubmit()}> Submit </button>
    </div>
  );

  function FilterSubmit() {
    todos.filter((todo) => {
      if (
        todo.title.includes(filterWord) ||
        todo.description.includes(filterWord)
      ) {
        return (
          <div>
            <h1>todo.title</h1>
            <p>todo.description</p>
          </div>
        );
      }
    });
  }
}

function ToDoInput() {
  let title = "";
  let description = "";

  const setToDos = useSetRecoilState(TodosAtom);

  function AddToDo() {
    setToDos((todos) => [...todos, { title: title, description: description }]);
  }

  return (
    <div>
      <input
        placeholder="Enter Title"
        onChange={(event) => {
          title = event.target.value;
        }}
      ></input>
      <input
        placeholder="Enter Description"
        onChange={(event) => {
          description = event.target.value;
        }}
      ></input>
      <button onClick={AddToDo}> Add todo </button>
    </div>
  );
}

export default App;
