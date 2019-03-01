import { Component, OnInit } from '@angular/core';
import { GetSeriesService } from '@services/get-series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { environment } from '@environments/environment.ts';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SearchData } from '@models/searchData.model';
import { SerieData } from '@models/serieData.model'

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss'],
})
export class SeriesSearchComponent implements OnInit {

  constructor(
    private getSeriesService: GetSeriesService,
    private router: Router,
    private showSeriesDetalService: ShowSeriesDetalService,
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
  tableIndex: number = 1;

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
    series.forEach(element => {
      let data = {
        'position': this.tableIndex,
        'title': element.name,
        'premiereDate': element.first_air_date,
        'rating': element.vote_average,
        'id': element.id,
      }
      this.tableIndex += 1;
      this.dataSourceTable.push(data);
    })
  }

  searchSeries(searchData: SearchData): void {
    this.startSearch = true;
    if(this.searchSeriesTitle.length > 3) {
      for(let i = 1; i <= searchData.total_pages; i++) {
        this.getSeriesService.searchSeries(this.searchSeriesTitle, i).subscribe(dataSeries => {
          this.dataToTable(dataSeries.results.filter(data => data.popularity > environment.popularity));
          if(i === searchData.total_pages) {
            this.dataSourceTable.length > 0 ? this.seriesId = this.dataSourceTable[0].id : this.seriesId = 0;
            this.loadingSeries = false;
          } 
        },
        error => console.log(error, 'searchSeriessError')
        )
      }  
    }
  }

  resetValues(): void {
    this.startSearch = false;
    this.dataSourceTable = [];
    this.showPremiere = false;
    this.showSearchedItems = true;
    this.tableIndex = 1;
  }

  onSubmit(): void {
    this.resetValues();
    this.getSeriesService.searchSeries(this.searchSeriesTitle, 1).subscribe(dataSeries => {
      this.searchSeries(dataSeries)
    },
    error => console.log(error)    
    )
    if(!this.searchSeriesTitle) {
      this.loadingSeries = false;
    }
  }
}
