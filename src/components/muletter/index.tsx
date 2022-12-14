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
import { BsYoutube, BsMusicNoteBeamed } from "react-icons/bs";
import { IconButton } from "@component/common/button";
import React from "react";
import Background from "./Background";
import { Track } from "@api/types";
import { useSetRecoilState } from "recoil";
import { audioTrackState } from "@store/atom";

export function MuLetterComponent({ recoTracks }: MuLetterComponentProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = React.useState<Track>(
    _.sample(recoTracks)!
  );
  const [backgroundSrc, setBackgroundSrc] = React.useState<string | null>(null);
  const [bgView, setBgView] = React.useState<boolean>(false);
  const refScreen = React.useRef<HTMLDivElement>(null);

  const setAudioTrack = useSetRecoilState(audioTrackState);

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      setTimeout(() => {
        setBgView(true);
      }, 750);
    }, 500);
  }, []);

  React.useEffect(() => {
    if (selectedTrack.album.images.length !== 0) {
      setBackgroundSrc(
        _.last(_.sortBy(selectedTrack.album.images, ({ width }) => width))!.url
      );
    } else {
      setBackgroundSrc(null);
    }
  }, [selectedTrack]);

  const onMouseTrack = React.useCallback((track: Track) => {
    setSelectedTrack(track);
  }, []);

  const previewOn = React.useCallback(
    (track: Track) => {
      setAudioTrack(track);
    },
    [setAudioTrack]
  );

  return (
    <Wrap ref={refScreen}>
      {bgView && <Background imgSrc={backgroundSrc} />}
      <Mail3D isOpen={open} refScreen={refScreen}>
        <RecoListWrap>
          {recoTracks?.map((track) => (
            <RecoItem
              key={track.id}
              onMouseMove={() => onMouseTrack(track)}
              onMouseEnter={() => onMouseTrack(track)}
            >
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
                {track.preview_url && (
                  <IconButton onClick={() => previewOn(track)}>
                    <BsMusicNoteBeamed />
                  </IconButton>
                )}
              </IconGroup>
            </RecoItem>
          ))}
        </RecoListWrap>
      </Mail3D>
    </Wrap>
  );
}
