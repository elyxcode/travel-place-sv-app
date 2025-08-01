export interface PlaceResponse {
    places: Place[];
}

export interface Place {
    name:         string;
    description:  string;
    category:     string;
    location:     Location;
    images:       string[];
    externalLink: string;
    payRequired:  boolean;
    initialPrice: string;
}

export interface Location {
    lat: number;
    lng: number;
}
