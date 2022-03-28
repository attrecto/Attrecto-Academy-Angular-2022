import { Component, OnInit } from '@angular/core';
import { BadgeService } from './services/badge.service';
import { Badge } from './classes/Badge';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  badges: Badge[];

  constructor(private badgeService: BadgeService) {
  }

  ngOnInit(): void {
    this.getBadges();
  }

  private getBadges() {
    this.badgeService.getBadges().subscribe({
      next: (badges: Badge[]) => {
        this.badges = badges;
      }
    });
  }

}
