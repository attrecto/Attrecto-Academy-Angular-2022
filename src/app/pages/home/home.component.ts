import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() increaseButtonClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseCounter() {
    this.counter++;

    this.increaseButtonClicked.emit('asd');
  }

  decreaseCounter() {
    this.counter--;
  }
}
