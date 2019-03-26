import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTranslate'
})
export class StatusTranslatePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Returning Series':
        return 'Powracający serial';
      case 'Ended':
        return 'Zakończona';
      default:
        return 'brak danych';
    }
  }
}
