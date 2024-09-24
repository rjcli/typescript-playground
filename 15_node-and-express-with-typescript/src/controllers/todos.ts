import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text: string = (req.body as { text: string }).text;
  const newTodo: Todo = new Todo(Math.random().toString(), text);

  todos.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: todos });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId: string = req.params.id;
  const updatedText: string = (req.body as { text: string }).text;
  const todoIndex: number = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find Todo...');
  }

  todos[todoIndex] = new Todo(todos[todoIndex].id, updatedText);

  res.json({ message: 'Updated...', updatedTodo: todos[todoIndex] });
};

export const deleteATodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId: string = req.params.id;

  const todoIndex: number = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find Todo...');
  }

  todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted...' });
};
