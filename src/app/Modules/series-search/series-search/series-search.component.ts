import { Component, OnInit } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { environment } from '@environments/environment.ts';
import { SearchedSerie } from '@models/searchedSerie.model';
import { SearchData } from '@models/searchData.model';


@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.scss'],
})
export class SeriesSearchComponent implements OnInit {

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private showSeriesDetalService: ShowSeriesDetalService,
  ) { }

  inputValue: string;
  loadingSeries: boolean = false;
  showPremiere: boolean = true;
  showSearchedItems: boolean = true;
  searchForm: FormGroup;
  searchSeriesTitle: string = '';
  dataSourceTable: Array<SearchedSerie> = [];
  value: string;
  isSerieDetailThere: boolean;

  get warningCondition() {
    return !this.showPremiere && this.dataSourceTable.length <= 0 && this.searchSeriesTitle.length > 3 && !this.loadingSeries;
  }

  get errorCondition() {
    return !this.isSerieDetailThere && !this.showPremiere && !this.loadingSeries && this.dataSourceTable.length <= 0 && (this.searchSeriesTitle.length <= 3 || !this.searchSeriesTitle)
  }

  get vievCondition() {
    return !this.loadingSeries && this.dataSourceTable.length > 0 && this.dataSourceTable.length <= 39 && this.showSearchedItems && !this.showPremiere
  }

  ngOnInit() {
    this.showSeriesDetalService.getShowInfo().subscribe((data: boolean) => {
      this.isSerieDetailThere = data;
      setTimeout(() => {
        if (data) {
          this.showPremiere = false;
        }
      }, 0);
    })
    this.searchForm = new FormGroup({
      seriesTitle: new FormControl()
    })
  }

  inputListener(event: any): void {
    this.inputValue = event.target.value;
    if (!event.target.value) {
      this.isSerieDetailThere = false;
      this.changeRoute('search');
      this.showPremiere = true;
    }
  }

  changeRoute(data: string): void {
    this.router.navigate([data])
  }

  showDetails($event: boolean): void {
    if ($event === true) {
      this.showSearchedItems = false;
    }
  }

  searchSeries(searchData: SearchData): void {
    if (this.searchSeriesTitle.length > 3) {
      for (let i = 1; i <= searchData.total_pages; i++) {
        this.seriesService.searchSeries(this.searchSeriesTitle, i).subscribe(dataSeries => {
          this.dataSourceTable = [...this.dataSourceTable, ...dataSeries.results.filter(data => data.popularity > environment.popularity)]
        },
          () => null,
          () => {
            this.loadingSeries = false;
          }
        )
      }
    } else {
      this.loadingSeries = false;
    }
  }

  resetValues(): void {
    this.dataSourceTable = [];
    this.showPremiere = false;
    this.showSearchedItems = true;
  }

  onSubmit(): void {
    if (this.router.url != '/search') {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return true;
      };
      this.router.navigate([`/search`])
    }
    this.loadingSeries = true;
    this.resetValues();
    this.searchSeriesTitle = this.inputValue;
    this.seriesService.searchSeries(this.searchSeriesTitle, 1).subscribe(dataSeries => {
      this.searchSeries(dataSeries)
    },
      () => null,
    )
    if (!this.searchSeriesTitle) {
      this.loadingSeries = false;
    }
  }
}
