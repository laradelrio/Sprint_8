
export interface ApiResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Starship[];
}

export interface Starship {
    name:                   string;
    model:                  string;
    manufacturer?:           string;
    cost_in_credits?:        string;
    length?:                 string;
    max_atmosphering_speed?: string;
    crew?:                   string;
    passengers?:             string;
    cargo_capacity?:         string;
    consumables?:            string;
    hyperdrive_rating?:      string;
    MGLT?:                   string;
    starship_class?:         string;
    pilots?:                 string[];
    films?:                  string[];
    created?:                Date;
    edited?:                 Date;
    url?:                    string;
}

export interface StarshipImg {
    url?: string;
}

export interface Film{
    title: string;
    episode_id: number,
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}


