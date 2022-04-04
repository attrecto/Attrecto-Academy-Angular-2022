import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './classes/user';
import { Router } from '@angular/router';
import { Badge } from '../badges/classes/Badge';
import { BadgeService } from '../badges/services/badge.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  badges: Badge[];

  constructor(
    private userService: UserService,
    private badgeService: BadgeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getBadges();
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

  private getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    });
  }
}
