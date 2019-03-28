import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddTab]',
})
export class AddTabDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
