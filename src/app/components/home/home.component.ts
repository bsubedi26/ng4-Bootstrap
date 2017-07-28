import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TodoService } from 'app/services/todo.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {

  auth: any;
  private todos: any = [];
  private subscription: Subscription;

  constructor(
    private todoService: TodoService,
    private store: Store<any>,
  ) {
    this.store.select(state => state.auth)
    .subscribe(response => this.auth = response)
  }

  public ngOnInit(): void {
    // this.subscription = this.todoService.todos$.subscribe((todos) => {
    //   this.todos = todos;
    // }, (err) => {
    //   console.error(err);
    // });
    // this.todoService.find();
  }

  public ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  public createTodo() {
    // this.store.dispatch(actions.users.find({ query: { email: 'sss'}}))
  }

  private handleSubmit(todo) {
    // console.log(todo, this.auth)
    // this.todoService.create({ text: todo })
    // .then(res => console.log('.then ', res))
    // .catch(res => console.log('.catch ', res))
  }


}
