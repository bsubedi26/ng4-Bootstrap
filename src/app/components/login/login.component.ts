import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatherService } from 'app/common/services/feather.service';
import { Store } from '@ngrx/store';
import { AuthActions } from 'app/common/actions/auth.actions';
import { AuthService } from 'app/common/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messages: Array<any> = [];

  constructor(
    private store: Store<any>,
    private authActions: AuthActions,
    private featherService: FeatherService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  submitForm(formValues) {
    const { email, password } = formValues;

    // this.authService.authenticateLogin({strategy:'local', email, password})  
    // .then(data => console.log(data))
    // .catch(data => console.log(data))

    this.authService.authenticateLogin({ strategy: 'local', email, password })
    .then((response:any) => {
      console.log('.then login ', response)
      this.messages.unshift(response.message)
      this.store.dispatch(this.authActions.loginUserSuccess(response))
    })
    .catch((response: any) => {
      console.log('.catch login ', response)
      this.messages.unshift(response.message)
      this.store.dispatch(this.authActions.loginUserError(response))
    })

  }

}


