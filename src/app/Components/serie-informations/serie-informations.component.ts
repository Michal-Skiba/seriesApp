import { Component, OnInit, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { SeriesService } from '@services/series.service';
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

  constructor(private seriesService: SeriesService) { }
  
  ngOnInit() {
    this.similarSeries$ = this.seriesService.getSimilarSeries(this.id);
    this.serieInformations$ = this.seriesService.getSeriesDetail(this.id);
  }
}