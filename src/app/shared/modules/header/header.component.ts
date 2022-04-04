import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.authService.emitLoggedInUserChange(false);

    this.router.navigate(['login']);
  }

}
