import { FeatherService } from 'app/common/services/feather.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as authActions from '../../common/actions/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  messages: Array<any> = [];

  constructor(
    private _feathers: FeatherService, 
    private store: Store<any>, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  setMessage(message) {
    this.messages.unshift(message);
  }
  
  submitForm(formValues) {
    const { email, password } = formValues;
    // this.store.dispatch(this.authActions.createUser(email, password))
    const userService = this._feathers.service('users')

    userService.create({email, password})
      .then(response => {
        this.setMessage('Successfully Created User!');
        // this.store.dispatch(this.authActions.createUserSuccess(response));
        this.store.dispatch(new authActions.CreateUserSuccess(response));
      })
      .catch(error => {
        // this.setMessage(error.message)
        this.setMessage('Could not create user!')
      })

  }

}
