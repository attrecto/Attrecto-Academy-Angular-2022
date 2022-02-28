import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-academy-2022';

  alertClicked(result: string) {
    console.log('clicked: ' + result);
  }
}
