import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import {
  Action,
  ActionType,
  AddTodoAction,
  DeleteTodoAction,
  Entity,
  ID,
  Payload,
  Todo,
  ToggleTodoAction,
} from './types';

const init = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const initState: Todo[] = [];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (newTodo: Todo) => {
    const action: AddTodoAction = { type: ActionType.ADD, payload: newTodo };
    dispatch(action);
  };

  const onDeleteTodo = (id: ID<Todo>) => {
    const action: DeleteTodoAction = { type: ActionType.DELETE, payload: id };
    dispatch(action);
  };

  const onToggleTodo = (id: ID<Todo>) => {
    const action: ToggleTodoAction = { type: ActionType.TOGGLE, payload: id };
    dispatch(action);
  };

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(
    (todo: Todo) => !todo.completed
  ).length;

  return {
    //Props
    todos,
    todosCount,
    pendingTodosCount,
    //Methods
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
