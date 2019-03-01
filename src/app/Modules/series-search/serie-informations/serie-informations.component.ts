import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { GetSeriesService } from '@services/get-series.service';
import { SerieDetail } from '@models/serieDetail.model';
import { Observable } from 'rxjs';
import { SearchData } from '@models/searchData.model';

@Component({
  selector: 'app-serie-informations',
  templateUrl: './serie-informations.component.html',
  styleUrls: ['./serie-informations.component.scss'],
})
export class SerieInformationsComponent implements OnInit {

  @Input() id: number;

  filmwebLink: string = environment.filmwebLink;
  imdbLink: string = environment.imdbLink;
  similarSeries$: Observable<SearchData>;
  serieInformations$: Observable<SerieDetail>

  constructor(private getSeriesService: GetSeriesService) { }
  
  ngOnInit() {
    this.similarSeries$ = this.getSeriesService.getSimilarSeries(this.id);
    this.serieInformations$ = this.getSeriesService.getSeriesDetail(this.id);
  }
}
