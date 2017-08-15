import { FeatherService } from 'app/providers/feather.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, OnInit {

  user: any;
  private todos: any = [];
  private subscription: Subscription;

  constructor(
    private featherService: FeatherService,
    private store: Store<any>,
  ) {
    this.store.select(state => state.user)
    .subscribe(response => this.user = response)
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
