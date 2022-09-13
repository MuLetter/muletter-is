import { Mail3D } from "@asset/symbols";
import { P2, P4 } from "@styles/font";
import {
  AlbumArt,
  IconGroup,
  RecoItem,
  RecoListWrap,
  TitleWrap,
  Wrap,
} from "./styles";
import { MuLetterComponentProps } from "./types";
import _ from "lodash";
import { BsYoutube } from "react-icons/bs";
import { IconButton } from "@component/common/button";

export function MuLetterComponent({ recoTracks }: MuLetterComponentProps) {
  console.log(recoTracks);
  return (
    <Wrap>
      <Mail3D>
        <RecoListWrap>
          {recoTracks?.map((track) => (
            <RecoItem key={track.id}>
              <AlbumArt
                src={
                  track.album.images.length !== 0
                    ? track.album.images[0].url
                    : ""
                }
              />
              <TitleWrap>
                <P4>
                  {_.join(
                    _.map(track.artists, ({ name }) => name),
                    " ,"
                  )}
                </P4>
                <P2>{track.name}</P2>
              </TitleWrap>
              <IconGroup>
                <a
                  href={`https://www.youtube.com/results?search_query=${_.join(
                    _.map(track.artists, ({ name }) => name),
                    " ,"
                  )} ${track.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconButton>
                    <BsYoutube />
                  </IconButton>
                </a>
              </IconGroup>
            </RecoItem>
          ))}
        </RecoListWrap>
      </Mail3D>
    </Wrap>
  );
}
