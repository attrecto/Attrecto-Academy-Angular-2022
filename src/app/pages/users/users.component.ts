import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  navigateToCreateUser() {
    this.router.navigate(['user-create']);
  }

  navigateToEditUser(userId: number) {
    this.router.navigate([`user-edit/${userId}`]);
  }

  removeUser(user: User) {
    this.userService.removeUser(user.id).subscribe({
      next: () => {
        this.getUsers();
      }
    });
  }

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      }
    });
  }
}
