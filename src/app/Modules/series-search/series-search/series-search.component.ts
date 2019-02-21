import { Component, OnInit } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ShowSeriesDetalService } from '../../../Services/show-series-detail.service';
import { environment } from '../../../../environments/environment';
import { tabelRowSearch } from '../../../shared/models/tabelRow.model';
import { searchData } from '../../../shared/models/searchData.model';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss']
})
export class SeriesSearchComponent implements OnInit {

  constructor(private getSeriesService: GetSeriesService, private router: Router, private showSeriesDetalService: ShowSeriesDetalService) {}

  startSearch: boolean = false;
  loadingSeries: boolean = false;
  searchForm: FormGroup;
  searchSeriesTitle: string = '';
  dataSourceTable: Array<any> = [];
  seriesId: number = 0;
  tillViev: boolean = false;
  showPremiere: boolean = true;
  value: string;
  showSearchedItems: boolean = true;
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


  inputListener(event: any) {
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

  showDetails($event: boolean) {
    if($event === true) {
      this.showSearchedItems = false;
    }
  }

  dataToTable(series: tabelRowSearch[]): void {
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

  searchSeries(searchData: searchData): void {
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
