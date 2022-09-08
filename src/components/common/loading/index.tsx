import { LoadingWrap } from "./styles";

export function LetterLoading() {
  return (
    <LoadingWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="loading letter"
        viewBox="0 0 150 100"
      >
        <path
          d="
          M 0 0
          L 0 100
          L 150 100
          L 150 0
          L 75 50
          L 5 0
          L 150 0
          "
          stroke="white"
          strokeWidth={2}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </LoadingWrap>
  );
}
