import { FeatherService } from '../providers/feather.service';
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Observable';  
import { Observer } from 'rxjs/Observer';  
import * as io from 'socket.io-client';  
import * as feathers from 'feathers-client';


@Injectable()
export class TodoService {

  public todos$: Observable<any[]>;
  public todos: any;
  private todosObserver: Observer<any[]>;
  private todoService: any;
  private dataStore: any = {
    todos: []
  };

  constructor(private featherService: FeatherService) {

    this.todoService = featherService.service('todos');

    // this.todoService.on('created', (todo) => this.onCreated(todo));
    // this.todoService.on('updated', (todo) => this.onUpdated(todo));
    // this.todoService.on('removed', (todo) => this.onRemoved(todo));

    this.todos$ = new Observable(observer => this.todosObserver = observer);

  }

  public create(input) {
    return this.todoService.create(input)
  }

  public find() {
    this.todoService.find((err, todos: any[]) => {
      if (err) { throw err };

      this.dataStore.todos = todos;
      this.todosObserver.next(this.dataStore.todos);
    });
  }

  private getIndex(id: string): number {
    let foundIndex = -1;

    for (let i = 0; i < this.dataStore.todos.length; i++) {
      if (this.dataStore.todos[i].id === id) {
        foundIndex = i;
      }
    }

    return foundIndex;
  }

  private onCreated(todo) {
    console.log('CREATED ', todo)
    this.dataStore.todos.data.push(todo)
    // this.todosObserver.next(this.dataStore.todos);
  }

  private onUpdated(todo) {
    const index = this.getIndex(todo.id);

    this.dataStore.todos[index] = todo;

    this.todosObserver.next(this.dataStore.todos);
  }

  private onRemoved(todo) {
    const index = this.getIndex(todo.id);

    this.dataStore.todos.splice(index, 1);

    this.todosObserver.next(this.dataStore.todos);
  }

}