import { AudioFeature, HasToken, Track } from "@api/types";
import { ProcessAudioFeatures } from "./types";
import _ from "lodash";
import { getFeatures } from "@api";
import { NEED_FEATURES } from "./common";

export function parseNeedFeatures(feature: AudioFeature) {
  const processAudioFeaturs: ProcessAudioFeatures = {} as any;
  for (let parse of NEED_FEATURES) {
    (processAudioFeaturs as any)[parse] = feature[parse];
  }

  return processAudioFeaturs;
}

export class FeaturesGenerator {
  datas: Track[];

  constructor(datas: Track[]) {
    this.datas = datas;
  }

  async generate(hasToken: HasToken) {
    let features: ProcessAudioFeatures[] = [];

    const trackIds = _.uniq(_.map(this.datas, ({ id }) => id));
    const chunked = _.chunk(trackIds, 100);

    for (let chunk of chunked) {
      const ids = _.join(chunk, ",");

      const res = await getFeatures.call(hasToken, ids);
      const audioFeatures = res.data.audio_features;

      // 필요로 하는 것만 parsing
      const processAudioFeatures = _.map(audioFeatures, parseNeedFeatures);
      features = _.concat(features, processAudioFeatures);
    }

    return features;
  }
}
