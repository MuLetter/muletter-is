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
  return (
    <Wrap>
      <Mail3D>
        <RecoListWrap>
          {recoTracks?.map((track) => (
            <RecoItem>
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
                <IconButton>
                  <BsYoutube />
                </IconButton>
              </IconGroup>
            </RecoItem>
          ))}
        </RecoListWrap>
      </Mail3D>
    </Wrap>
  );
}
