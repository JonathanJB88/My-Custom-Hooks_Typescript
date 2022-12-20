import { Reducer } from 'react';
import { Todo, Action, ActionType } from './types';

export const todoReducer: Reducer<Todo[], Action<ActionType, Todo>> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.DELETE:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case ActionType.ADD:
      return [...state, action.payload as Todo];
    case ActionType.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    default:
      return [...state];
  }
};
