import { Actors } from './actors.model';

export class Credits {
    cast: Array<Actors>
    crew: Array<Crew>
    id: number
}

export class Crew {
    credit_id: string
    department: string
    gender: number
    id: number
    job: string
    name: string
    profile_path: string
}