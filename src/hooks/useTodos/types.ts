export type UID = number | string;

export interface Entity<I extends UID = number> {
  id: I;
}

export interface Action<
  T extends ActionType = ActionType,
  E extends Entity = Entity,
  P extends Payload<E> = Payload<E>
> {
  type: T;
  payload: P;
}

export enum ActionType {
  DELETE = '[TODO] Delete Todo',
  TOGGLE = '[TODO] Toggle Todo',
  ADD = '[TODO] Add Todo',
}

export type Payload<E extends Entity> = E | E[] | ID<E>;

export type ID<E extends Entity> = E['id'];

export interface Todo extends Entity {
  title: string;
  completed: boolean;
}

export type DeleteTodoAction = Action<ActionType.DELETE, Todo, number>;

export type ToggleTodoAction = Action<ActionType.TOGGLE, Todo, number>;

export type AddTodoAction = Action<ActionType.ADD, Todo, Todo>;
