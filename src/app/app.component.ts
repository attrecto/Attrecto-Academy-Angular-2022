import { Component } from '@angular/core';
import { AuthService } from './shared/modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-academy-2022';
  loggedInUser: boolean;

  constructor(private authService: AuthService) {
    this.subscribeLoggedInUser();
  }

  subscribeLoggedInUser() {
    this.authService.loggedInUserStatusChange.subscribe({
      next: (loggedInUser: boolean) => {
        this.loggedInUser = loggedInUser;
      }
    })
  }

  alertClicked(result: string) {
    console.log('clicked: ' + result);
  }
}
