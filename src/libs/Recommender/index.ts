import { getArtists, getAvailableGenres, getRecommendations } from "@api";
import { Track } from "@api/types";
import _ from "lodash";
import { ArtistAndGenres, Artist, ProcessAudioFeatures, Seed } from "./types";
import { FeaturesGenerator } from "./utils";

class Recommender {
  tracks: Track[];
  spotifyToken?: string;

  availableGenres?: string[];
  artistAndGenres?: ArtistAndGenres[];
  audioFeatures?: ProcessAudioFeatures[];
  seeds?: Seed[];

  recommendations?: Track[];
  recoAudioFeatures?: ProcessAudioFeatures[];

  constructor(spotifyToken: string, tracks: Track[]) {
    this.spotifyToken = spotifyToken;
    this.tracks = tracks;
  }

  async addAvailableGenres() {
    try {
      const resAvailableGenres = await getAvailableGenres.call(this);
      this.availableGenres = resAvailableGenres.data.genres;
    } catch (err) {
      console.log(this.spotifyToken);
      console.error(err);
    }
  }

  async addArtistAndGenres() {
    try {
      const tracks = this.tracks;
      let artistsIds: Artist[] | string[] = _.uniqBy(
        _.flatten(_.map(tracks, (track) => track.artists)),
        ({ id }) => id
      );
      artistsIds = _.map(artistsIds, ({ id }) => id);
      const chunked = _.chunk(artistsIds, 50);

      for (let chunk of chunked) {
        const ids = _.join(chunk, ",");
        const resGenres = await getArtists.call(this, ids);
        const artists = resGenres.data.artists;

        const artistAndGenres = _.map(artists, (artist) => {
          const _availableGenres = _.filter(artist.genres, (genre) =>
            this.availableGenres?.includes(genre)
          );

          return {
            id: artist.id,
            genres: _availableGenres.length === 0 ? ["pop"] : _availableGenres,
          };
        });

        if (this.artistAndGenres)
          this.artistAndGenres = _.concat(
            this.artistAndGenres,
            artistAndGenres
          ) as any;
        else this.artistAndGenres = artistAndGenres as ArtistAndGenres[];
      }
    } catch (err) {
      console.log(this.spotifyToken);
      console.error(err);
    }
  }

  async addAudioFeatures() {
    try {
      this.audioFeatures = await new FeaturesGenerator(this.tracks).generate(
        this
      );
    } catch (err) {
      console.log(this.spotifyToken);
      console.error(err);
    }
  }

  addSeeds() {
    const tracks = this.tracks;
    const artists = this.artistAndGenres;
    const features = this.audioFeatures;

    this.seeds = _.map(tracks, ({ id: trackId, artists: _artists }) => {
      const artistIds = _.map(_artists, ({ id }) => id);
      let genres = _.uniq(
        _.flatten(
          _.map(
            artistIds,
            (artistId) => _.find(artists, ({ id }) => id === artistId)?.genres
          )
        )
      );
      const feature = _.find(features, ({ id }) => id === trackId);

      // max 5 check
      if (1 + artistIds.length + genres.length > 5) {
        // track, artist 수량에 집중, 장르는 서브템으로
        const availableGenreSize = 5 - (1 + artistIds.length);
        genres = _.sampleSize(genres, availableGenreSize);
      }
      const seedArtists = _.join(artistIds, ",");
      const seedGenres = _.join(genres, ",");

      const seedFeatures = _.reduce(
        Object.keys(feature!),
        (acc, cur) =>
          cur === "id"
            ? acc
            : {
                ...acc,
                [`target_${cur}`]: feature![cur],
              },
        {}
      );

      return {
        seed_tracks: trackId,
        seed_artists: seedArtists,
        seed_genres: seedGenres,
        ...seedFeatures,
      };
    }) as Seed[];
  }

  async addRecommendations() {
    let recommendations: Track[] = [];

    try {
      for (let seed of this.seeds!) {
        const resRecommendations = await getRecommendations.call(this, seed);
        const recos = resRecommendations.data.tracks;
        const parsed = _.map(recos, ({ id, name, artists, album }) => ({
          id,
          name,
          artists: _.map(artists, ({ id, name }) => ({
            id,
            name,
          })),
          album: {
            images: album.images,
          },
        }));

        recommendations = _.concat(recommendations, parsed) as Track[];
      }
    } catch (err) {
      console.log(this.spotifyToken);
      console.error(err);
    }

    this.recommendations = _.shuffle(_.uniqBy(recommendations, "id"));
  }

  async addRecoAudioFeatures() {
    try {
      this.recoAudioFeatures = await new FeaturesGenerator(
        this.recommendations!
      ).generate(this);
    } catch (err) {
      console.log(this.spotifyToken);
      console.error(err);
    }
  }

  get mergeAudioFeatures() {
    let mergeAudioFeatures = _.concat(
      this.audioFeatures,
      this.recoAudioFeatures
    );

    return _.uniqBy(mergeAudioFeatures, "id");
  }

  get processIds() {
    return _.map(this.mergeAudioFeatures, (feature) => _.values(feature)[0]);
  }

  get processDatas() {
    return _.map(this.mergeAudioFeatures, (feature) =>
      _.tail(_.values(feature))
    );
  }
}

export default Recommender;
