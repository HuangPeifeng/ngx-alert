import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAlertComponent } from './ngx-alert.component';
import { AlertComponent } from './alert/alert.component';
import { NgxAlertDirective } from './ngx-alert.directive';
import { Subject } from 'rxjs';

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
  providers: [],
  entryComponents: [
    AlertComponent
  ]
})
export class NgxAlertModule {
  public static ngxAlertOpen = new Subject<any>();
  public static ngxAlertClose = new Subject<any>();
}
