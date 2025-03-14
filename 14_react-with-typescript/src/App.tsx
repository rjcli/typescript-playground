import { type FC, useState } from 'react';

import TodoList from './components/TodoList.tsx';
import { Todo } from './types/CustomTypes.ts';
import NewTodo from './components/NewTodo.tsx';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: todos.length + 1, text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDelete={handleDelete} />
    </div>
  );
};

export default App;
