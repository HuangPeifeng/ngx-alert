import { Component } from '@angular/core';
import { ngxAlert } from './ngx-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-alert';

  constructor() { }

  alert() {
    ngxAlert('', '', 'success').subscribe(res => {
      console.log(res);
    });
  }

}
