import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxAlertService {
  dataChange = new Subject<any>();

  constructor() { }

  alert(config?) {
    this.dataChange.next(config);
  }
}
