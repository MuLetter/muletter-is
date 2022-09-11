import axios from "axios";
import qs from "qs";
import { ResGetToken, ResSearch } from "./types";

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
