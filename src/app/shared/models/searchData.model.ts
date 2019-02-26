import { SearchedSerie } from './searchedSerie.model'

export class SearchData {
    page: number;
    results: Array<SearchedSerie>;
    total_pages: number;
    total_results: number;
}