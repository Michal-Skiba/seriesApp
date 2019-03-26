import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';
import { BestRatedSeriesRouting } from './best-reated-series.routing';
import { MatTabsModule, MatTableModule, MatProgressSpinnerModule, MatIconModule, MatTooltipModule, MatDialogModule, } from '@angular/material';
import { BestRatedTableComponent } from './best-rated-table/best-rated-table.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ComponentsModule } from 'src/app/Components/components.module';
var BestRatedSeriesModule = /** @class */ (function () {
    function BestRatedSeriesModule() {
    }
    BestRatedSeriesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                BestRatedSeriesComponent,
                BestRatedTableComponent,
            ],
            imports: [
                CommonModule,
                BestRatedSeriesRouting,
                MatTabsModule,
                MatTableModule,
                MatProgressSpinnerModule,
                MatIconModule,
                MatTooltipModule,
                HighchartsChartModule,
                MatDialogModule,
                ComponentsModule,
            ],
            exports: [
                BestRatedSeriesComponent,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
    ], BestRatedSeriesModule);
    return BestRatedSeriesModule;
}());
export { BestRatedSeriesModule };
//# sourceMappingURL=best-rated-series.module.js.map