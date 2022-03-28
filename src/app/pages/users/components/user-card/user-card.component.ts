import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() removeBtnClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitRemoveBtnClick(event: Event) {
    event.stopPropagation();

    this.removeBtnClicked.emit();
  }

}
