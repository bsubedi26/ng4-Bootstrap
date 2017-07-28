import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as authActions from '../../common/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messages: Array<any> = [];
  redirectMessage: any;

  constructor(
    private store: Store<any>,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });

    // this.redirectMessage = this.route.snapshot.params.redirectMessage;
    // When auth guard redirects to login page
    // this.route.params.subscribe(params => {
    //    this.redirectMessage = params['redirectMessage'];
    //    console.log(this.redirectMessage)
    // });
  }

  async submitForm(formValues) {
    const { email, password } = formValues;

    try {
      const authResponse: any = await this.authService.authenticate({ strategy: 'local', email, password })

      if (authResponse.accessToken) {
        // this.messages.unshift(response.message);
        console.log(authResponse)
        const userInfo = await this.authService.decodeToken(authResponse.accessToken)
        console.log('userinfo ', userInfo)

      }
    } catch (response) {
      console.log('.catch login ', response)
      this.messages.unshift(response.message)
      // this.store.dispatch(new authActions.LoginError(response))

    } 
  

    // this.authService.authenticate({ strategy: 'local', email, password })
    // .then((response: any) => {
    //   const { accessToken } = response;
    //   this.messages.unshift(response.message);

    //   this.authService.decodeToken(accessToken)
    //   .then((user: any) => {
    //     console.log('USS', user)
    //     this.store.dispatch(new authActions.LoginSuccess(response))
    //   })

    // })
    // .catch((response: any) => {
    //   console.log('.catch login ', response)
    //   this.messages.unshift(response.message)
    //   // this.store.dispatch(new authActions.LoginError(response))
    // })

  }

}


