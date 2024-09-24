import { FC } from 'react';
import { TodoListProps } from '../types/CustomTypes';
import './TodoList.css';

const TodoList: FC<TodoListProps> = ({ items, onDelete: handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={handleDelete.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
