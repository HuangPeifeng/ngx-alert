import {
  Directive,
  ViewContainerRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[ngxAlert]'
})
export class NgxAlertDirective implements OnInit {

  constructor(public _viewContainerRef: ViewContainerRef) { }

  ngOnInit() { }

}
