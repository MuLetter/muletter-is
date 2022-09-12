import { Seed } from "@recommender/types";
import axios from "axios";
import qs from "qs";
import {
  HasToken,
  ResAudioFeatures,
  ResAvailableGenres,
  ResGetArtists,
  ResGetRecommendations,
  ResGetToken,
  ResSearch,
} from "./types";

const AUTHURL = process.env.REACT_APP_SPOTIFY_AUTH_URL;
const APIURL = process.env.REACT_APP_SPOTIFY_API_URL;

export const getToken = async () =>
  (
    await axios.post<ResGetToken>(
      `${AUTHURL}`,
      qs.stringify({ grant_type: "client_credentials" }),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: process.env.REACT_APP_CLIENT_ID!,
          password: process.env.REACT_APP_CLIENT_SECRET!,
        },
      }
    )
  ).data;

export const getSearch = async (token: string, q: string, page: number) =>
  (
    await axios.get<ResSearch>(
      `${APIURL}/search?${qs.stringify({
        q,
        type: "track",
        market: "KR",
        limit: 10,
        offset: page * 10,
      })}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;

export const getAvailableGenres = function (this: HasToken) {
  return axios.get<ResAvailableGenres>(
    `${APIURL}/recommendations/available-genre-seeds`,
    { headers: { authorization: `Bearer ${this.spotifyToken}` } }
  );
};

export const getArtists = function (this: HasToken, ids: string) {
  return axios.get<ResGetArtists>(
    `${APIURL}/artists?${qs.stringify({ ids })}`,
    {
      headers: {
        authorization: `Bearer ${this.spotifyToken}`,
      },
    }
  );
};

export const getFeatures = function (this: HasToken, ids: string) {
  return axios.get<ResAudioFeatures>(
    `${APIURL}/audio-features?${qs.stringify({ ids })}`,
    {
      headers: {
        authorization: `Bearer ${this.spotifyToken}`,
      },
    }
  );
};

export const getRecommendations = function (this: HasToken, seed: Seed) {
  return axios.get<ResGetRecommendations>(
    `${APIURL}/recommendations?${qs.stringify({
      ...seed,
      market: "KR",
      limit: 100,
    })}`,
    {
      headers: {
        authorization: `Bearer ${this.spotifyToken}`,
      },
    }
  );
};
