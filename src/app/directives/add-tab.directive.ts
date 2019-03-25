import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[addTab]'
})
export class AddTabDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
