import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/services';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {
  redirectToLogin() {
    this.router.navigate(['login']);
  }
  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }
  confirmAccount(token: string) {
    this.authService.confirm({
      token 
    }).subscribe({
      next: () => {
        this.message = 'Account activated successfully!\n You can now login.';
        this.submited = true;
        this.isOkay = true;
      },
      error: () => {
        this.message = 'The token is invalid or expired.';
        this.isOkay = false;
        this.submited = true;
      }
    });
  }
  message = '';
  isOkay = true;
  submited = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }
}
