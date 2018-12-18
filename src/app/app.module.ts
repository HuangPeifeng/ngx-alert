import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAlertModule } from './ngx-alert/ngx-alert.module';
import { NgxAlertDirective } from './ngx-alert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
