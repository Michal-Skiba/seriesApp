import { Type } from '@angular/core';

export class TabClass {
  constructor(public component: Type<any>, public tab: number) {}
}
