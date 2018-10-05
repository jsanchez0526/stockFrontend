import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  form: FormGroup;
  message = '';
  messageType = '';


  constructor() {
  }

  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });

  }

  login(): void {
    if (this.form.valid) {
      this.messageType = 'success';
      this.message = 'Logeo exitoso! , Bienvenido! ';
    } else {
      this.messageType = 'danger';
      this.message = 'campo requerido';
    }
  }
}



