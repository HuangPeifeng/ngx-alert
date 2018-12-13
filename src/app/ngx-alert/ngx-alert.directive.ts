import {
  Directive,
  ViewContainerRef,
  Input,
  ComponentRef,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { NgxAlertOutput, NgxAlertOption, ngxAlertType } from '.';

@Directive({
  selector: '[ngxAlert]'
})
export class NgxAlertDirective implements OnInit, OnDestroy {
  componentRef: ComponentRef<any>;

  @Input() ngxTitle: string;
  @Input() ngxMessage: string;
  @Input() ngxType: ngxAlertType;
  @Input() ngxOption: NgxAlertOption;

  @Output() ngxCancel = new EventEmitter();


  @HostListener('click', ['$event'])
  onClick() {
    this.createAlert({
      ngxTitle: this.ngxTitle,
      ngxMessage: this.ngxMessage,
      ngxType: this.ngxType,
      ngxOption: this.ngxOption
    });
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() { }

  createAlert(data: NgxAlertOutput) {
    const factory = this._resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this._viewContainerRef.createComponent(factory);

    (this.componentRef.instance as NgxAlertOutput).ngxTitle = data.ngxTitle;
    (this.componentRef.instance as NgxAlertOutput).ngxMessage = data.ngxMessage;
    (this.componentRef.instance as NgxAlertOutput).ngxType = data.ngxType;
    (this.componentRef.instance as NgxAlertOutput).ngxOption = data.ngxOption;

    (this.componentRef.instance as NgxAlertOutput).closeEvent.subscribe(res => {
      this.closeAlert(res);
    });
  }

  closeAlert(data) {
    this.ngxCancel.emit(data);
    this.componentRef.destroy();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
