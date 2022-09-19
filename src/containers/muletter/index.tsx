import { MuLetterComponent } from "@component";
import { RecoTracksState } from "@store/reco/atom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export function MuLetterContainer() {
  const recoTracks = useRecoilValue(RecoTracksState);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!recoTracks) navigate("/", { replace: true });
  }, [navigate, recoTracks]);

  return recoTracks ? <MuLetterComponent recoTracks={recoTracks} /> : <></>;
}
