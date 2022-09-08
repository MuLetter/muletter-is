import { SmallSVG } from "./styles";
import { SmallLogoStyleProps } from "./types";

export function SmallLogo({ type }: SmallLogoStyleProps) {
  return (
    <SmallSVG
      type={type}
      xmlns="http://www.w3.org/2000/svg"
      width={214.37}
      height={60}
    >
      <text alignmentBaseline="central" y="30">
        MuLetter
      </text>
    </SmallSVG>
  );
}
