import { Component, Input, OnInit } from '@angular/core';
import { Badge } from '../../classes/Badge';

@Component({
  selector: 'app-badge-card',
  templateUrl: './badge-card.component.html',
  styleUrls: ['./badge-card.component.scss']
})
export class BadgeCardComponent implements OnInit {
  @Input() badge: Badge;

  constructor() {
  }

  ngOnInit(): void {
  }

}
