import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
