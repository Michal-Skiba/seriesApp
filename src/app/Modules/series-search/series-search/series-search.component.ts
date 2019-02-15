import { Component, OnInit } from '@angular/core';
import { GetSeriesService } from '../../../Services/get-series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ShowSeriesDetalService } from '../../../Services/show-series-detail.service';
import { AppConst } from '../../../shared/const';
import { tabelRow } from '../../../shared/models/tabelRow.model';
import { searchData } from '../../../shared/models/searchData.model';
import { searchedSerie } from '../../../shared/models/searchedSerie.model';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss']
})
export class SeriesSearchComponent implements OnInit {

  constructor(private getSeriesService: GetSeriesService, private router: Router, private showSeriesDetalService: ShowSeriesDetalService) {}


  startSearch: boolean = false;
  tableIndex: number = 1;
  emptySearch: boolean = false;
  loadingSeries: boolean = false;
  searchError: boolean = false;
  searchForm: FormGroup;
  searchSeriesTitle: string = '';
  searchedSeries: Array<searchedSerie> = [];
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
    if(!event.target.value) {
      this.isSerieDetailThere = false;
      this.changeRoute('search');
      this.showPremiere = true;
      this.emptySearch = false;
      this.searchError = false;
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

  dataToTable(series: tabelRow[]): void {
    series.forEach(element => {
      let data = {
        'position': this.tableIndex,
        'title': element.name,
        'premiereDate': element.first_air_date,
        'rating': element.vote_average,
        'id': element.id,
      }
      this.dataSourceTable.push(data);
      this.tableIndex++
    })
  }

  popularityVerify(serials: Array<any>) {
    let verifed = [];
    serials.forEach(element => {
      if(element.popularity > AppConst.popularity) {
        verifed.push(element)
      }
    });
    if (verifed.length > 0) {
      this.emptySearch = false;
    }
    return verifed
  }

  searchSeries(searchData: searchData): void {
    if(searchData.total_pages < 40) {
      this.searchError = false;
      for(let i = 1; i <= searchData.total_pages; i++) {
        this.getSeriesService.searchSeries(this.searchSeriesTitle, i).subscribe(dataSeries => {
          let verifedSeriesByPopularity = this.popularityVerify(dataSeries.results)  
          this.searchedSeries.push(...verifedSeriesByPopularity) 
          this.dataToTable(verifedSeriesByPopularity);
          if(i === searchData.total_pages) {
            this.startSearch = true;
            this.dataSourceTable.length > 0 ? this.seriesId = this.dataSourceTable[0].id : this.seriesId = 0;
          }
        },
        error => console.log(error, 'searchSeries')
        )
      }
    } else {
      this.searchError = true;
    }
    this.loadingSeries = false;
  }

  resetValues(): void {
    this.startSearch = false;
    this.dataSourceTable = [];
    this.tableIndex = 1;
    this.loadingSeries = true;
    this.emptySearch = true;
    this.searchedSeries = [];
    this.showPremiere = false;
    this.showSearchedItems = true;
  }

  onSubmit(): void {
    this.resetValues();
    this.searchSeriesTitle = this.searchForm.get('seriesTitle').value;
    this.getSeriesService.searchSeries(this.searchSeriesTitle, 1).subscribe(dataSeries => {
      this.searchSeries(dataSeries)
    })
  }
}
