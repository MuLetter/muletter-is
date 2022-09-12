import { getAvailableGenres } from "@api";

class Recommender {
  spotifyToken?: string;
  availableGenres?: string[];

  constructor(spotifyToken: string) {
    this.spotifyToken = spotifyToken;
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
}

export default Recommender;
