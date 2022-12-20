import { Todo, Action, ActionType } from './types';

export const todoReducer = (
  state: Todo[],
  action: Action<ActionType, Todo>
) => {
  switch (action.type) {
    case ActionType.DELETE:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    case ActionType.ADD:
      return [...state, action.payload];
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
