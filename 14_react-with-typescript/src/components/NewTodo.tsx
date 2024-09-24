import { type FC, type FormEvent, useRef } from 'react';
import { NewTodoProps } from '../types/CustomTypes';
import './NewTodo.css';

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit' id='add-todo-button'>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
