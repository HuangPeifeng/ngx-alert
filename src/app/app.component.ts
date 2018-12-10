import { Component } from '@angular/core';
import { NgxAlertService } from './ngx-alert/ngx-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-alert';

  constructor(private _ngxAlertService: NgxAlertService) { }

  alert() {
    this._ngxAlertService.alert();
  }
}
