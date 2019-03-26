import { Actors } from './actors.model';

export class CreditsResponse {
    body: Credits;
    headers: any;
    ok: boolean;
    status: number;
    statusText: string;
    type: number;
    url: string;
}

export class Credits {
    cast: Array<Actors>;
    crew: Array<Crew>;
    id: number;
}

export class Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string;
}
