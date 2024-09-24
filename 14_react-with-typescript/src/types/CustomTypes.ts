export type Todo = {
  id: number;
  text: string;
};

export type TodoListProps = {
  items: Todo[];
  onDelete: (id: number) => void;
};

export type NewTodoProps = {
  onAddTodo: (text: string) => void;
};
