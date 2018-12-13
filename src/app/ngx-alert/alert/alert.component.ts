import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxAlertOutput, NgxAlertOption, ngxAlertType } from '..';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, NgxAlertOutput {
  @Input() ngxTitle: string;
  @Input() ngxMessage: string;
  @Input() ngxType: ngxAlertType;
  @Input() ngxOption: NgxAlertOption;
  @Output() closeEvent = new EventEmitter;

  option = {
    submitBtn: true,
    closeBtn: false,
    backgroundColor: '#fffdeb',
    submitBtnColor: '#005dbd',
    closeBtnColor: '#ffffff'
  } as NgxAlertOption;

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
