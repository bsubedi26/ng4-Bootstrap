import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as authActions from 'app/common/actions/auth.actions';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  messages: Array<any> = [];

  constructor(
    private store: Store<any>, 
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });


    this.userService.on('created', (user) => {
      console.log('Listener::onCreated ', user)
    })
  }

  setMessage(message) {
    this.messages.unshift(message);
  }
  
  submitForm(formValues) {
    const { email, password } = formValues;
    // this.store.dispatch(this.authActions.createUser(email, password))
    // const userService = this._feathers.service('users')

    this.userService.create({email, password})
      .then(response => {
        this.setMessage('Successfully Created User!');
        // this.store.dispatch(this.authActions.createUserSuccess(response));
        this.store.dispatch(new authActions.CreateUserSuccess(response));
      })
      .catch(error => {
        // this.setMessage(error.message)
        console.error(error)
        this.setMessage('Could not create user!')
      })

  }

}
