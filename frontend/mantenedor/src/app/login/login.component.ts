import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  success = false;
  loading = false;
  error = null;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }
  submit(): void {

    this.loading = true;
    this.error = null;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authenticationService.login(email, password).subscribe(
      user => {
        this.success = true;
        console.log(user);
        this.router.navigate(['/admin']);
      }, e => {
        this.loading = false;
        this.error = e;
        console.log('err', e);
      }
    );
  }
}
