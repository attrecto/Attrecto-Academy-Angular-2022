import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../classes/user';
import { Badge } from '../../../badges/classes/Badge';
import { UserBadge } from '../../classes/user-badge';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Input() badges: Badge[];

  @Output() removeBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitRemoveBtnClick(event: Event) {
    event.stopPropagation();

    this.removeBtnClicked.emit();
  }

  getBadgeImage(badge: UserBadge) {
    const badgeDetail = this.badges.find((curBadge: Badge) => {
      return curBadge.id === badge.id;
    });

    return badgeDetail.image;
  }
}
