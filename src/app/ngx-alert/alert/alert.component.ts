import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxAlertOutput } from '../ngx-alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, NgxAlertOutput {
  @Output() closeEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeEvent.next();
  }

}
