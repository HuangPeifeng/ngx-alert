import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { NgxAlertDirective } from './ngx-alert.directive';
import { AlertComponent } from './alert/alert.component';
import { NgxAlertService } from './ngx-alert.service';
import { NgxAlertOutput } from './ngx-alert';

@Component({
  selector: 'ngx-alert',
  templateUrl: './ngx-alert.component.html',
  styleUrls: ['./ngx-alert.component.scss']
})
export class NgxAlertComponent implements OnInit, OnDestroy {
  componentRef: ComponentRef<any>;
  @ViewChild(NgxAlertDirective) ngxAlert: NgxAlertDirective;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _service: NgxAlertService
  ) { }

  ngOnInit() {
    this._service.dataChange.subscribe(config => {
      this.displayComponent(config);
    });
  }

  displayComponent(config) {
    const viewContainerRef = this.ngxAlert.viewContainerRef;
    const factory = this._resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = viewContainerRef.createComponent(factory);

    (this.componentRef.instance as NgxAlertOutput).closeEvent.subscribe(x => {
      this.closeAlert();
    });
  }

  closeAlert() {
    this.componentRef.destroy();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
