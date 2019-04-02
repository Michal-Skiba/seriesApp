// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'fbf021c3b54ef79e35757c4a9f21f7cd',
  apiUrl: 'https://api.themoviedb.org/3/',
  popularity: 5,
  posterUrl: 'https://image.tmdb.org/t/p/w500/',
  filmwebLink: 'https://www.filmweb.pl/search?q=',
  imdbLink: 'https://www.imdb.com/find?ref_=nv_sr_fn&q=',
  requestsTimeLimit: 10600,
  requestsLimit: 39,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
