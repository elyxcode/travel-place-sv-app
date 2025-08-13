export interface PlaceResponse {
    places: Place[];
}

export interface Place {
    id:                 string;
    name:               string;
    description:        string;
    briefDescription:   string;
    category:           string;
    location:           Location;
    images:             string[];
    externalLink:       string|null;
    payRequired:        boolean;
    initialPrice:       string;
}

export interface Location {
    address: string;
    lat: number;
    lng: number;
}
