import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAlertComponent } from './ngx-alert.component';
import { AlertComponent } from './alert/alert.component';
import { NgxAlertDirective } from './ngx-alert.directive';

@NgModule({
  declarations: [
    NgxAlertComponent,
    AlertComponent,
    NgxAlertDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxAlertComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class NgxAlertModule { }
