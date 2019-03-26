import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PopularityToString'
})
export class PopularityToStringPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 200) {
      return 'bardzo popularne';
    } else if (value > 100) {
      return 'popularne';
    } else if (value > 50) {
      return 'średnio popularne';
    } else {
      return 'nie popularne';
    }
  }
}
