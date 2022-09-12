export type ArtistAndGenres = {
  id: string;
  genres: string[];
};

export interface Artist {
  id: string;
  name: string;
}

export type NeedAudioFeautres =
  | "id"
  | "danceability"
  | "energy"
  | "loudness"
  | "speechiness"
  | "acousticness"
  | "liveness"
  | "valence"
  | "tempo";

export type ProcessAudioFeatures = {
  [key: string]: string | number;

  id: string;
  danceability: number;
  energy: number;
  loudness: number;
  speechiness: number;
  acousticness: number;
  liveness: number;
  valence: number;
  tempo: number;
};
