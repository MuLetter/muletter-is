import { Track } from "@api/types";
import Recommender from ".";

class RecommenderBuilder {
  recommender: Recommender;

  constructor(spotifyToken: string, tracks: Track[]) {
    this.recommender = new Recommender(spotifyToken, tracks);
  }

  // step 1. 사용자 우체통 음악들을 추천  프로세스에 사용하기 위한
  // 준비물들 준비
  async step1() {
    await this.recommender.addAvailableGenres();
    await this.recommender.addArtistAndGenres();
    await this.recommender.addAudioFeatures();
    this.recommender.addSeeds();
  }

  // step 2. Spotify 로부터 추천 음악들을 받아오는 과정
  async step2() {
    await this.recommender.addRecommendations();
    await this.recommender.addRecoAudioFeatures();
  }
}

export default RecommenderBuilder;
