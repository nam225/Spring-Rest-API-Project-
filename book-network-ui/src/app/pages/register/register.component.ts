import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationRequest } from 'src/app/services/models/registration-request';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  login() {
    this.router.navigate(['/login']);
  }
  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account']);
      },
      error: (error) => {
        console.log(error);
        this.errorMsg.push(error.error.message);
      }
    })
  }
  registerRequest: RegistrationRequest = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  errorMsg: Array<string> = [];
}
