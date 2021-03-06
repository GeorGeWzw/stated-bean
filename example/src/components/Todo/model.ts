import { Inject, Injectable } from 'injection-js';

import { Todo, TodoService } from '../../services/TodoService';

import { AfterProvided, DisposableBean, Effect, Stated, StatedBean } from 'stated-bean';

@StatedBean()
@Injectable()
export class TodoModel implements DisposableBean {
  @Stated()
  todoList: Todo[] = [];

  @Stated()
  current: Todo = {};

  constructor(@Inject(TodoService) private readonly _todo: TodoService) {}

  destroy(): void {
    console.log('TodoModel destroyed');
  }

  @AfterProvided()
  @Effect()
  async fetchTodo() {
    this.todoList = await this._todo.fetchTodoList();
  }

  addTodo = () => {
    this.todoList = [
      ...this.todoList,
      {
        id: this.todoList.length + 1,
        ...this.current,
      },
    ];
    this.current = {};
  };
}
