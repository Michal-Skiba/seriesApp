export class Episode {
    air_date: string;
    crew: Array<Crew>;
    episode_number: number;
    guest_stars: Array<GuastStars>;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export class Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
}

export class GuastStars {
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string | null;
}