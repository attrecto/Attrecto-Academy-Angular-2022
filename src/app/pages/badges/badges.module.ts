import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';
import { BadgeCardComponent } from './components/badge-card/badge-card.component';


@NgModule({
  declarations: [
    BadgesComponent,
    BadgeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BadgesModule {
}
