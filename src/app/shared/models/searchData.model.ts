import { SearchedSerie } from './searchedSerie.model'


export class SearchDataRepsonse {
    body: SearchData;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: number;
    url: string;
}

export class SearchData {
    page: number;
    results: Array<SearchedSerie>;
    total_pages: number;
    total_results: number;
}

