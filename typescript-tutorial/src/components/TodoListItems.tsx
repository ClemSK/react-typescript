import React from 'react';
import './styles.css';
import { Todo } from './model';
import SingleTodo from './SingleTodo';

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListItems: React.FC<Props> = ({ todoList, setTodoList }: Props) => {
  return (
    <div className="todos">
      {todoList.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoListItems;
