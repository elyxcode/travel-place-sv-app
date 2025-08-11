export interface PlaceResponse {
    places: Place[];
}

export interface Place {
    // id: number|string;
    name:         string;
    description:  string;
    category:     string;
    location:     Location;
    images:       string[];
    externalLink: string|null;
    payRequired:  boolean;
    initialPrice: string|number;
}

export interface Location {
    title: string;
    lat: number;
    lng: number;
}
