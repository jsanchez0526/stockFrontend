import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message = '';
  messageType = '';

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
    if (this.form.valid) {
      this.loginService.makeLogin(this.form.value).subscribe(value => {
        if (value.token) {
          this.loginService.setToken(value.token);
          this.setMessage('success', 'Bienvenido');
          this.router.navigate(['']);
        }
      }, error1 => {
        this.setMessage('danger', error1.error.non_field_errors[0]);
      });
    } else {
      this.setMessage('danger', '*Campos requerido');
    }
  }

  setMessage(type: string, message: string) {
    this.messageType = type;
    this.message = message;
  }

}
