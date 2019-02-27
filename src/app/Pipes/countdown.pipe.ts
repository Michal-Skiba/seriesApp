import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown'
})
export class CountdownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
    // if(this.serieInformations.next_episode_to_air) {
    //   const countDownDate = new Date(this.serieInformations.next_episode_to_air.air_date + " " + " 10:00:00").getTime();
    //   setInterval(() => {
    //     const now = new Date().getTime();
    //     const distance = countDownDate - now;
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //     this.countDownTime = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s "
    //   }, 1000)
      
    //   this.serieInformations.next_episode_to_air.air_date;
    // } else {
    //   return 'Brak danych'
    // }
  //   <user-messages
  //   [user]="user3">
  // </user-messages>
  }

}
