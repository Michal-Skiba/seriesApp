import { Observable } from 'rxjs';
import 'rxjs/Rx';
export var fakeSearchSeriesData = {
    page: 1,
    results: [
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 100,
            name: 'test1',
            origin_country: ["JP"],
            original_language: 'JP',
            original_name: 'testowyJanusz1',
            overview: 'opis',
            popularity: 3,
            poster_path: 'noPath',
            vote_average: 100,
            vote_count: 10,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 102,
            name: 'test2',
            origin_country: ["JP"],
            original_language: 'JP',
            original_name: 'testowyJanusz2',
            overview: 'opis',
            popularity: 7,
            poster_path: 'noPath',
            vote_average: 56,
            vote_count: 30,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 103,
            name: 'test3',
            origin_country: ["JP"],
            original_language: 'JP',
            original_name: 'testowyJanusz3',
            overview: 'opis',
            popularity: 1,
            poster_path: 'noPath',
            vote_average: 50,
            vote_count: 104,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 104,
            name: 'test4',
            origin_country: ["JP"],
            original_language: 'JP',
            original_name: 'testowyJanusz4',
            overview: 'opis',
            popularity: 65,
            poster_path: 'noPath',
            vote_average: 123,
            vote_count: 110,
        },
        {
            backdrop_path: 'nothing',
            first_air_date: '10.10.1990',
            genre_ids: [1, 2, 3],
            id: 105,
            name: 'test5',
            origin_country: ["JP"],
            original_language: 'JP',
            original_name: 'testowyJanusz5',
            overview: 'opis',
            popularity: 33,
            poster_path: 'noPath',
            vote_average: 111,
            vote_count: 15,
        }
    ],
    total_pages: 1,
    total_results: 5,
};
var FakeSeriesService = /** @class */ (function () {
    function FakeSeriesService() {
    }
    FakeSeriesService.searchSeries = function () {
        throw new Error("Method not implemented.");
    };
    FakeSeriesService.prototype.searchSeries = function () {
        return Observable.of(fakeSearchSeriesData);
    };
    return FakeSeriesService;
}());
export { FakeSeriesService };
//# sourceMappingURL=fakeSeriesService.service.js.map