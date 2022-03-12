import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoListItems from './components/TodoListItems';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(todoList);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoListItems todoList={todoList} setTodoList={setTodoList} />
      {/* {todoList.map((t) => (
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
};

export default App;
