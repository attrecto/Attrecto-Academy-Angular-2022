import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: boolean;
  loggedInUserStatusChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.initLoggedInUser();
  }

  initLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedIn') === 'true';

    this.emitLoggedInUserChange(loggedInUser);
  }

  emitLoggedInUserChange(loggedInUser: boolean) {
    this.loggedInUser = loggedInUser;
    this.loggedInUserStatusChange.next(loggedInUser);
  }
}
