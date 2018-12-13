import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { NgxAlertOutput } from '.';
import { ngxAlertOpen, ngxAlertClose } from 'src/main';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'ngx-alert',
  templateUrl: './ngx-alert.component.html',
  styleUrls: ['./ngx-alert.component.scss']
})
export class NgxAlertComponent implements OnInit, OnDestroy {
  componentRef: ComponentRef<any>;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    ngxAlertOpen.subscribe(data => {
      this.createAlert({
        ngxTitle: data.ngxTitle,
        ngxMessage: data.ngxMessage,
        ngxType: data.ngxType,
        ngxOption: data.ngxOption
      });
    });
  }

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
    ngxAlertClose.next(data);
    this.componentRef.destroy();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
