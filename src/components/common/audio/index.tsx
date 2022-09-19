import { audioTrackState } from "@store/atom";
import { P4, Tag1 } from "@styles/font";
import { useRecoilValue } from "recoil";
import { AlbumArt, AudioWrap, TitleWrap } from "./styles";
import _ from "lodash";

function Audio() {
  const audioTrack = useRecoilValue(audioTrackState);

  console.log(audioTrack);
  return audioTrack ? (
    <AudioWrap>
      <AlbumArt src={audioTrack.album.images[0].url} alt="album-art" />
      <TitleWrap>
        <Tag1 className="artists-names">
          {_.join(
            _.flatten(_.map(audioTrack.artists, ({ name }) => name)),
            ","
          )}
        </Tag1>
        <P4 className="track-title">{audioTrack.name}</P4>
      </TitleWrap>
      <audio src={audioTrack.preview_url} autoPlay></audio>
    </AudioWrap>
  ) : (
    <></>
  );
}

export default Audio;
