import { Episode } from './episode.model';

export class SeasonEpiosodesReponse {
    body: SeasonEpiosodes;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: number;
    url: string;
}

export class SeasonEpiosodes {
    air_date: string
    episodes: Array<Episode>
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    _id: string
}

