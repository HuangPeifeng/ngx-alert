import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxAlertOutput } from '../ngx-alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, NgxAlertOutput {
  @Output() closeEvent = new EventEmitter;

  config = {
    type: 'success',
    submitBtn: true,
    closeBtn: false,
    title: null,
    message: null
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.closeEvent.next(true);
  }

  close() {
    this.closeEvent.next();
  }

}
