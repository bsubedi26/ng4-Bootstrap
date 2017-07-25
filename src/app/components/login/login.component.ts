import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeatherService } from 'app/common/services/feather.service';
import { Store } from "@ngrx/store";
import { AuthActions } from 'app/common/actions/auth.actions';
import { AuthService } from "app/common/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  messages: Array<any> = [];

  constructor(
    private store: Store<any>, 
    private authActions: AuthActions, 
    private featherService: FeatherService,
    private authService: AuthService,
  ) {
   
  }

  submitForm(email: string, password: string) {

    console.log('submit login')
    // this.authService.authenticateLogin({strategy:'local', email, password})  
    // .then(data => console.log(data))
    // .catch(data => console.log(data))

    this.authService.authenticateLogin({ strategy: 'local', email, password })
    .then((response:any) => {
      this.messages.unshift(response.message)
      this.store.dispatch(this.authActions.loginUserSuccess(response))
    })
    .catch((response: any) => {
      this.messages.unshift(response.message)
      this.store.dispatch(this.authActions.loginUserError(response))
    })
    
  }

}


