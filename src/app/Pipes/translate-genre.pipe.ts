import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateGenre'
})
export class TranslateGenrePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Action & Adventure':
        return 'Akcja i przygoda'
      case 'Animation':
        return 'Animacja'
      case 'Comedy':
        return 'Komedia'
      case 'Crime':
        return 'Kryminał'
      case 'Documentary':
        return 'Dokumentalny'
      case 'Drama':
        return 'Dramat'
      case 'Family':
        return 'Familijny' 
      case 'Kids':
        return 'Dla dzieci' 
      case 'Mystery':
        return 'Zagadka' 
      case 'News':
        return 'Nowości' 
      case 'Reality':
        return 'Reality' 
      case 'Sci-Fi & Fantasy':
        return 'Sci-Fi & Fantasy' 
      case 'Soap':
        return 'Mydło' 
      case 'Talk':
        return 'Rozmowa' 
      case 'War & Politics':
        return 'Wojna i polityka' 
      case 'Western':
        return 'Western' 
      default:
        return 'brak danych'
    }
  }
}
