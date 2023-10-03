import { Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
import Todo from './pages/todo/Todo';
import TodoList from './pages/todo-list/TodoList';
import Navbar from "./shared/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
