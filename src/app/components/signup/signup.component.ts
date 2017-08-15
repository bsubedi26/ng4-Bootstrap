import { FeatherService } from 'app/providers/feather.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as authActions from 'app/common/actions/auth.actions';
// import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  messages: Array<any> = [];
  successForm: boolean;

  userService: any;
  inputFields = [
    { id: 1, name: 'email' },
    { id: 2, name: 'password' },
  ]

  constructor(
    private store: Store<any>, 
    // private userService: UserService,
    private formBuilder: FormBuilder,
    private featherService: FeatherService
  ) {
    this.userService = this.featherService.service('users')
    
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(3)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(3)]) ],
    });


    // this.userService.on('created', (user) => {
    //   console.log('Listener::onCreated ', user)
    // })
  }

  setMessage(message) {
    this.messages.pop();
    this.messages.unshift(message);
  }
  
  async submitForm(formValues) {
    const { email, password } = formValues;

    try {
      const userResponse = await this.userService.create({ email, password });
      this.setMessage({ message: 'Successfully Created User!', success: true });
      this.successForm = true;
      this.store.dispatch(new authActions.CreateUserSuccess(userResponse));
    } catch (error) {
      console.error(error)
      this.successForm = false;
      this.setMessage({ message: 'Could not create user!', success: false });
    }

  }

}
