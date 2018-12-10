import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxAlert]'
})
export class NgxAlertDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
