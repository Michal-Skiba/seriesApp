import { Component, OnInit } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ShowSeriesDetalService } from '../../../Services/show-series-detail.service';
import { environment } from '../../../../environments/environment';
import { SearchedSerie } from '../../../shared/models/searchedSerie.model';
import { SearchData } from '../../../shared/models/searchData.model';
import { SerieData } from '../../../shared/models/serieData.model'

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss']
})
export class SeriesSearchComponent implements OnInit {

  constructor(
    private getSeriesService: GetSeriesService,
    private router: Router,
    private showSeriesDetalService: ShowSeriesDetalService
  ) {}

  startSearch: boolean = false;
  loadingSeries: boolean = false;
  tillViev: boolean = false;
  showPremiere: boolean = true;
  showSearchedItems: boolean = true;
  searchForm: FormGroup;
  searchSeriesTitle: string = '';
  dataSourceTable: Array<SerieData> = [];
  seriesId: number = 0;
  value: string;
  isSerieDetailThere: boolean;

  ngOnInit() {
    this.showSeriesDetalService.getShowInfo().subscribe((data: boolean) => { 
      this.isSerieDetailThere = data;
      setTimeout(()=> {
        if(data) {
          this.showPremiere = false;
        }
      }, 0);
    })
    this.searchForm = new FormGroup ({
      seriesTitle: new FormControl()
    })
  }

  inputListener(event: any): void {
    this.searchSeriesTitle = event.target.value;
    this.startSearch = false;
    if(!event.target.value) {
      this.isSerieDetailThere = false;
      this.changeRoute('search');
      this.showPremiere = true;
      this.startSearch = false;
    }
  }

  changeRoute(data:string): void {
    this.router.navigate([data])
  }

  showDetails($event: boolean): void {
    if($event === true) {
      this.showSearchedItems = false;
    }
  }

  dataToTable(series: Array<SearchedSerie>): void {
    series.forEach((element, index) => {
      let data = {
        'position': index + 1,
        'title': element.name,
        'premiereDate': element.first_air_date,
        'rating': element.vote_average,
        'id': element.id,
      }
      this.dataSourceTable.push(data);
    })
    this.loadingSeries = false;
  }

  searchSeries(searchData: SearchData): void {
    this.startSearch = true;
    if(this.searchSeriesTitle.length > 3) {
      for(let i = 1; i <= searchData.total_pages; i++) {
        this.getSeriesService.searchSeries(this.searchSeriesTitle, i).subscribe(dataSeries => {
          this.dataToTable(dataSeries.results.filter(data => data.popularity > environment.popularity));
          if(i === searchData.total_pages) {
            this.dataSourceTable.length > 0 ? this.seriesId = this.dataSourceTable[0].id : this.seriesId = 0;
          }
        },
        error => console.log(error, 'searchSeriessError')
        )
      }  
    }
    this.loadingSeries = false;
  }

  resetValues(): void {
    this.startSearch = false;
    this.dataSourceTable = [];
    this.loadingSeries = true;
    this.showPremiere = false;
    this.showSearchedItems = true;
  }

  onSubmit(): void {
    this.resetValues();
    this.getSeriesService.searchSeries(this.searchSeriesTitle, 1).subscribe(dataSeries => {
      this.searchSeries(dataSeries)
    })
    if(!this.searchSeriesTitle) {
      this.loadingSeries = false;
    }
  }
}
