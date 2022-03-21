import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(environment.apiUrl + '/users/' + userId);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/users');
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/users', user);
  }

  editUser(user: User, userId: number): Observable<User> {
    return this.httpClient.patch<User>(environment.apiUrl + '/users/' + userId, user);
  }

}
