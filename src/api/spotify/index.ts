import axios from "axios";
import qs from "qs";
import { ResGetToken } from "./types";

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
