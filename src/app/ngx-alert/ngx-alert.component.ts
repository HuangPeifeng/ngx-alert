import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NgxAlertDirective } from './ngx-alert.directive';
import { AlertComponent } from './alert/alert.component';
import { NgxAlertService } from './ngx-alert.service';

@Component({
  selector: 'ngx-alert',
  templateUrl: './ngx-alert.component.html',
  styleUrls: ['./ngx-alert.component.scss']
})
export class NgxAlertComponent implements OnInit {
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
    const componentRef = viewContainerRef.createComponent(factory);
  }

}
