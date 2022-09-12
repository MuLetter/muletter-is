import Recommender from ".";

class RecommenderBuilder {
  recommender: Recommender;

  constructor(spotifyToken: string) {
    this.recommender = new Recommender(spotifyToken);
  }

  // step 1. 사용자 우체통 음악들을 추천  프로세스에 사용하기 위한
  // 준비물들 준비
  async step1() {
    await this.recommender.addAvailableGenres();
  }
}

export default RecommenderBuilder;
