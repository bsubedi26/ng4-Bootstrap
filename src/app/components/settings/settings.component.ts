import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnDestroy, OnInit {

  navigations: Array<any> = [
    { path: 'inbox', name: 'Profile' },
    { path: 'starred', name: 'Account' },
    { path: 'sent', name: 'Notifications'},
    { path: 'spam', name: 'Security' },
  ]

  constructor(
    private store: Store<any>,
  ) {
    console.log('init settings')
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
