import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css']
})
export class UserFormComponent {
  form: FormGroup;
  messages: Array<any> = [];
  @Input()
  handleSubmit: Function;

  @Input()
  fields: any;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    console.log(this.fields)
    
    this.fields.forEach(field => {
      this.form = this.formBuilder.group({
        [field.name]: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      });
    })


    
  } 



}
