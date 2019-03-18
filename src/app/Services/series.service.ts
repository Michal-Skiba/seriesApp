import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { tap, delay, timeout, flatMap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import { SerieDetail, SerieDetailResponse } from '@models/serieDetail.model';
import { SearchData, SearchDataRepsonse } from '@models/searchData.model';
import { Credits, CreditsResponse } from '@models/credits.model';
import { SeasonEpiosodes, SeasonEpiosodesReponse } from '@models/seasonEpiosed.model';
import 'rxjs/add/observable/of';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  language: string;
  delay: number = 0;
  firstRequestTime: any = null;
  currentRequestCounter: number = 0;
  arrayTimes: Array<object> = []
  queque: Array<Observable<any>>
  timesToSendRequest: Array<number> = [];
  limitReq: number = 39;

  constructor(private http: HttpClient, private changeLanguageService: ChangeLanguageService) { 
    this.language = this.changeLanguageService.getInfoLanguage();
  }

  // limitsCalculate(resp): void {
  //   const limitRemaining = resp.headers.get('X-RateLimit-Remaining')
  //   this.arrayTimes.push(moment())
  //   const now = moment();
  //   if(limitRemaining === "39") {
  //     this.arrayTimes = []
  //     this.firstRequestTime = moment();
  //   }
  //   this.currentRequestCounter++
  //   if(limitRemaining <= 2 && now.diff(this.firstRequestTime, "seconds") < 10) {
  //     this.delay = (environment.requestLimitTime - now.diff(this.firstRequestTime, "seconds")) * 1000;
  //     this.currentRequestCounter = 0;
  //   } else {
  //     this.delay = 0;
  //   }
  //   if(this.currentRequestCounter >= 39) {
  //     this.firstRequestTime = this.arrayTimes[this.arrayTimes.length - (39 - limitRemaining)]
  //   }
  // }

  queuing(request: Observable<any>): Observable<any> {
    this.arrayTimes.push(moment())
    console.log(this.currentRequestCounter, 'aaaaaaaaaaa')
    let timeToCalcReq = this.arrayTimes[0] 
    const now = moment();
    const timeDif = 10 - now.diff(timeToCalcReq , "seconds")
    let timeToSendRequest = 0;
    let sumOfTimesToSendRequest = () => {
      let sum = 0;
      for(var i=0; i<this.timesToSendRequest.length; i++) {
        sum += this.timesToSendRequest[i];
      }
       return sum;
    }

    if(sumOfTimesToSendRequest() === 0) {
      
    }
    if(this.currentRequestCounter > this.limitReq && this.currentRequestCounter < this.limitReq*2 && now.diff(timeToCalcReq , "seconds") < 10) {
      timeToSendRequest = timeDif * 1000
      if(this.currentRequestCounter === this.limitReq + 1) {
        this.timesToSendRequest  = [timeDif, ...this.timesToSendRequest]
        let interval = setInterval(() => { 
          this.timesToSendRequest[0] = this.timesToSendRequest[0] - 1;
          if(this.timesToSendRequest[0] === 0){
            clearInterval(interval)
          }
        }, 1000);
      }
    } else if(this.currentRequestCounter > this.limitReq *2 && now.diff(this.arrayTimes[this.arrayTimes.length - 40], "seconds") < 10 ) {
      console.log('wchodzi', this.currentRequestCounter, 'coo')
      let takeTime = this.arrayTimes[this.arrayTimes.length - this.limitReq - 1] 
      let limitOverrun = Math.floor(this.currentRequestCounter / this.limitReq);
      timeToSendRequest = sumOfTimesToSendRequest() * 1000

      if(this.currentRequestCounter === (limitOverrun * this.limitReq) + 1) {
        this.timesToSendRequest = [...this.timesToSendRequest ,(10 - now.diff(takeTime , "seconds"))]
        let interval = setInterval(() => { 
          this.timesToSendRequest[this.timesToSendRequest.length - 1] = this.timesToSendRequest[this.timesToSendRequest.length -1] - 1;
          if(this.timesToSendRequest[this.timesToSendRequest.length - 1] === 0){
            clearInterval(interval)
          }
        }, 1000);
      } 
      if (now.diff(this.arrayTimes[this.arrayTimes.length - 40], "seconds") > 10 ){
        timeToSendRequest = 0
        this.currentRequestCounter = 0;
        this.arrayTimes = [];
        this.timesToSendRequest = []
      }
      
    } 
    console.log(this.arrayTimes, 'aaaaaaaaaaaasdjkghsdghfjdkhgkdfhgjkshdfgjkhdkfh', now.diff(this.arrayTimes[this.arrayTimes.length - 40], "seconds") > 10 )

    this.currentRequestCounter++
    return Observable.of(request).pipe(
      switchMap(() => timer(timeToSendRequest)),
      tap(() => console.log(timeToSendRequest, 'aaaaaaaaaa')),
      switchMap(() => request),
    );
  }

  getSeriesDetail(seriesId: number): Observable<SerieDetailResponse> {
    return this.queuing(this.http.get<SerieDetail>(`${environment.apiUrl}tv/${seriesId}?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }))
  }

  searchSeries(seriesTitle: string, page: number): Observable<SearchDataRepsonse> {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}search/tv?api_key=${environment.apiKey}&language=${this.language}-US&query=${seriesTitle}&page=${page}`, {
      observe: 'response',
    }))
  }

  getCredits(seriesId: number): Observable<CreditsResponse> { 
    return this.queuing(this.http.get<Credits>(`${environment.apiUrl}tv/${seriesId}/credits?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }))
  }

  getSeasonEpisode(seriesId: number, seasonNumber: number): Observable<SeasonEpiosodesReponse> {
    return this.queuing(this.http.get<SeasonEpiosodes>(`${environment.apiUrl}tv/${seriesId}/season/${seasonNumber}?api_key=${environment.apiKey}&language=${this.language}-US`, {
      observe: 'response',
    }))
  }

  getSimilarSeries(seriesId: number, page: number = 1): Observable<SearchDataRepsonse> {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}tv/${seriesId}/similar?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }))
  }

  getLastWeekTrends(): Observable<SearchDataRepsonse> {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}trending/tv/week?api_key=${environment.apiKey}`, {
      observe: 'response',
    }))
  }

  getLastTrends(page: number): Observable<SearchDataRepsonse> {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}tv/popular?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }))
  }

  getPremieres(date: string, page: number): Observable<SearchDataRepsonse> {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}discover/tv?api_key=${environment.apiKey}&language=${this.language}-US&sort_by=vote_average.asc&first_air_date.gte=${date}&first_air_date.lte=${date}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false`, {
      observe: 'response',
    }))
  }

  getTopratedSeries(page: number): any {
    return this.queuing(this.http.get<SearchData>(`${environment.apiUrl}tv/top_rated?api_key=${environment.apiKey}&language=${this.language}-US&page=${page}`, {
      observe: 'response',
    }))
  }
}
