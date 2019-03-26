import { RouterModule } from '@angular/router';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SerieDetailComponent } from 'src/app/Components/serie-detail/serie-detail.component';
var routes = [
    {
        path: '',
        component: SeriesSearchComponent,
        children: [
            {
                path: ':id',
                component: SerieDetailComponent,
            }
        ]
    },
];
export var routing = RouterModule.forChild(routes);
//# sourceMappingURL=serie-search.routing.js.map