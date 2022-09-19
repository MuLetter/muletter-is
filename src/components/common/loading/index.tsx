import { white } from "@styles/color";
import React from "react";
import {
  LetterLoadingWrap,
  LogoLoadingSVG,
  LogoLoadingWrap,
  MailBoxLoadingWrap,
} from "./styles";

export function LetterLoading() {
  return (
    <LetterLoadingWrap>
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
          stroke={white[500]}
          strokeWidth={2}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </LetterLoadingWrap>
  );
}

export function MailBoxLoading() {
  return (
    <MailBoxLoadingWrap
      xmlns="https://www.w3.org/2000/svg"
      width={296}
      height={178}
      viewBox="0 0 296 178"
    >
      <path
        d="M 0 45
          L 0 144.75
          L 76.29 178
          L 296 144.75
          L 296 45
          L 76.29 78.25
          L 0 45
          L 219.71 12.5
          L 296 45
          L 278 70
          L 76.29 100.25
          L 76.29 150
          L 278 118.75
          L 278 70
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </MailBoxLoadingWrap>
  );
}

export function LogoLoading() {
  return (
    <LogoLoadingWrap>
      <LogoLoadingSVG
        viewBox="0 0 147 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2880D8" />
            <stop offset="50%" stopColor="#AC73CF" />
            <stop offset="100%" stopColor="#EE68A4" />
          </linearGradient>
        </defs>
        <path
          fill="url(#linear)"
          className="fill"
          d="M11.968 26L6.712 7.496H6.568C6.616 7.976 6.664 8.624 6.712 9.44C6.76 10.256 6.808 11.144 6.856 12.104C6.904 13.04 6.928 13.952 6.928 14.84
          V26H0.772V0.295998H10.024L15.388 18.548H15.532L20.788 0.295998H30.04V26H23.668V14.732C23.668 13.916 23.68 13.052 23.704 12.14C23.728 11.204 
          23.764 10.328 23.812 9.512C23.86 8.672 23.896 8.012 23.92 7.532H23.776L18.592 26H11.968ZM50.9487 6.092V26H45.7647L44.9007 23.516H44.5047C44.0967 
          24.188 43.5687 24.74 42.9207 25.172C42.2967 25.58 41.6007 25.88 40.8327 26.072C40.0887 26.264 39.3087 26.36 38.4927 26.36C37.1967 26.36 36.0207 
          26.108 34.9647 25.604C33.9087 25.1 33.0687 24.308 32.4447 23.228C31.8447 22.148 31.5447 20.756 31.5447 19.052V6.092H38.4207V16.964C38.4207 18.26 
          38.6007 19.244 38.9607 19.916C39.3447 20.588 39.9567 20.924 40.7967 20.924C41.6607 20.924 42.3327 20.696 42.8127 20.24C43.2927 19.76 43.6167 19.064
          43.7847 18.152C43.9767 17.24 44.0727 16.124 44.0727 14.804V6.092H50.9487ZM52.4939 26V0.295998H59.4419V20.384H69.3419V26H52.4939ZM78.415 5.732C80.359 
          5.732 82.027 6.068 83.419 6.74C84.835 7.412 85.915 8.42 86.659 9.764C87.427 11.108 87.811 12.8 87.811 14.84V17.9H75.535C75.583 18.932 75.967 19.784 
          76.687 20.456C77.431 21.128 78.499 21.464 79.891 21.464C81.139 21.464 82.279 21.344 83.311 21.104C84.343 20.864 85.411 20.48 86.515 19.952V24.884C85.555 
          25.388 84.499 25.76 83.347 26C82.219 26.24 80.791 26.36 79.063 26.36C77.047 26.36 75.247 26.012 73.663 25.316C72.103 24.596 70.867 23.48 69.955 
          21.968C69.043 20.456 68.587 18.524 68.587 16.172C68.587 13.772 68.995 11.804 69.811 10.268C70.651 8.732 71.803 7.592 73.267 6.848C74.755 6.104 76.471 
          5.732 78.415 5.732ZM78.667 10.412C77.851 10.412 77.167 10.664 76.615 11.168C76.087 11.672 75.775 12.476 75.679 13.58H81.583C81.583 12.98 81.463 12.452 
          81.223 11.996C81.007 11.516 80.683 11.132 80.251 10.844C79.819 10.556 79.291 10.412 78.667 10.412ZM97.8609 20.924C98.4849 20.924 99.0489 20.864 99.5529 
          20.744C100.081 20.6 100.621 20.432 101.173 20.24V25.244C100.429 25.556 99.6369 25.82 98.7969 26.036C97.9569 26.252 96.8889 26.36 95.5929 26.36C94.2969 
          26.36 93.1569 26.156 92.1729 25.748C91.2129 25.34 90.4569 24.644 89.9049 23.66C89.3529 22.652 89.0769 21.248 89.0769 19.448V11.24H86.6649V8.432L89.7249 
          6.272L91.4889 2.096H95.9889V6.092H100.885V11.24H95.9889V18.98C95.9889 19.628 96.1449 20.12 96.4569 20.456C96.7929 20.768 97.2609 20.924 97.8609 
          20.924ZM110.82 20.924C111.444 20.924 112.008 20.864 112.512 20.744C113.04 20.6 113.58 20.432 114.132 20.24V25.244C113.388 25.556 112.596 25.82 111.756 
          26.036C110.916 26.252 109.848 26.36 108.552 26.36C107.256 26.36 106.116 26.156 105.132 25.748C104.172 25.34 103.416 24.644 102.864 23.66C102.312 22.652 
          102.036 21.248 102.036 19.448V11.24H99.6235V8.432L102.684 6.272L104.448 2.096H108.948V6.092H113.844V11.24H108.948V18.98C108.948 19.628 109.104 20.12 
          109.416 20.456C109.752 20.768 110.22 20.924 110.82 20.924ZM122.986 5.732C124.93 5.732 126.598 6.068 127.99 6.74C129.406 7.412 130.486 8.42 131.23 
          9.764C131.998 11.108 132.382 12.8 132.382 14.84V17.9H120.106C120.154 18.932 120.538 19.784 121.258 20.456C122.002 21.128 123.07 21.464 124.462 
          21.464C125.71 21.464 126.85 21.344 127.882 21.104C128.914 20.864 129.982 20.48 131.086 19.952V24.884C130.126 25.388 129.07 25.76 127.918 26C126.79 
          26.24 125.362 26.36 123.634 26.36C121.618 26.36 119.818 26.012 118.234 25.316C116.674 24.596 115.438 23.48 114.526 21.968C113.614 20.456 113.158 18.524 
          113.158 16.172C113.158 13.772 113.566 11.804 114.382 10.268C115.222 8.732 116.374 7.592 117.838 6.848C119.326 6.104 121.042 5.732 122.986 5.732ZM123.238 
          10.412C122.422 10.412 121.738 10.664 121.186 11.168C120.658 11.672 120.346 12.476 120.25 13.58H126.154C126.154 12.98 126.034 12.452 125.794 11.996C125.578 
          11.516 125.254 11.132 124.822 10.844C124.39 10.556 123.862 10.412 123.238 10.412ZM144.7 5.732C145.084 5.732 145.48 5.756 145.888 5.804C146.296 5.852 
          146.596 5.9 146.788 5.948L146.176 12.428C145.936 12.38 145.636 12.332 145.276 12.284C144.94 12.236 144.46 12.212 143.836 12.212C143.404 12.212 142.936 
          12.26 142.432 12.356C141.952 12.428 141.484 12.596 141.028 12.86C140.596 13.124 140.236 13.52 139.948 14.048C139.684 14.576 139.552 15.296 139.552 
          16.208V26H132.676V6.092H137.788L138.868 9.26H139.192C139.552 8.612 140.02 8.024 140.596 7.496C141.172 6.944 141.808 6.512 142.504 6.2C143.224 5.888 
          143.956 5.732 144.7 5.732Z"
        />
        <path
          className="stroke"
          d="M11.968 26L6.712 7.496H6.568C6.616 7.976 6.664 8.624 6.712 9.44C6.76 10.256 6.808 11.144 6.856 12.104C6.904 13.04 6.928 13.952 6.928 14.84
          V26H0.772V0.295998H10.024L15.388 18.548H15.532L20.788 0.295998H30.04V26H23.668V14.732C23.668 13.916 23.68 13.052 23.704 12.14C23.728 11.204 
          23.764 10.328 23.812 9.512C23.86 8.672 23.896 8.012 23.92 7.532H23.776L18.592 26H11.968ZM50.9487 6.092V26H45.7647L44.9007 23.516H44.5047C44.0967 
          24.188 43.5687 24.74 42.9207 25.172C42.2967 25.58 41.6007 25.88 40.8327 26.072C40.0887 26.264 39.3087 26.36 38.4927 26.36C37.1967 26.36 36.0207 
          26.108 34.9647 25.604C33.9087 25.1 33.0687 24.308 32.4447 23.228C31.8447 22.148 31.5447 20.756 31.5447 19.052V6.092H38.4207V16.964C38.4207 18.26 
          38.6007 19.244 38.9607 19.916C39.3447 20.588 39.9567 20.924 40.7967 20.924C41.6607 20.924 42.3327 20.696 42.8127 20.24C43.2927 19.76 43.6167 19.064
          43.7847 18.152C43.9767 17.24 44.0727 16.124 44.0727 14.804V6.092H50.9487ZM52.4939 26V0.295998H59.4419V20.384H69.3419V26H52.4939ZM78.415 5.732C80.359 
          5.732 82.027 6.068 83.419 6.74C84.835 7.412 85.915 8.42 86.659 9.764C87.427 11.108 87.811 12.8 87.811 14.84V17.9H75.535C75.583 18.932 75.967 19.784 
          76.687 20.456C77.431 21.128 78.499 21.464 79.891 21.464C81.139 21.464 82.279 21.344 83.311 21.104C84.343 20.864 85.411 20.48 86.515 19.952V24.884C85.555 
          25.388 84.499 25.76 83.347 26C82.219 26.24 80.791 26.36 79.063 26.36C77.047 26.36 75.247 26.012 73.663 25.316C72.103 24.596 70.867 23.48 69.955 
          21.968C69.043 20.456 68.587 18.524 68.587 16.172C68.587 13.772 68.995 11.804 69.811 10.268C70.651 8.732 71.803 7.592 73.267 6.848C74.755 6.104 76.471 
          5.732 78.415 5.732ZM78.667 10.412C77.851 10.412 77.167 10.664 76.615 11.168C76.087 11.672 75.775 12.476 75.679 13.58H81.583C81.583 12.98 81.463 12.452 
          81.223 11.996C81.007 11.516 80.683 11.132 80.251 10.844C79.819 10.556 79.291 10.412 78.667 10.412ZM97.8609 20.924C98.4849 20.924 99.0489 20.864 99.5529 
          20.744C100.081 20.6 100.621 20.432 101.173 20.24V25.244C100.429 25.556 99.6369 25.82 98.7969 26.036C97.9569 26.252 96.8889 26.36 95.5929 26.36C94.2969 
          26.36 93.1569 26.156 92.1729 25.748C91.2129 25.34 90.4569 24.644 89.9049 23.66C89.3529 22.652 89.0769 21.248 89.0769 19.448V11.24H86.6649V8.432L89.7249 
          6.272L91.4889 2.096H95.9889V6.092H100.885V11.24H95.9889V18.98C95.9889 19.628 96.1449 20.12 96.4569 20.456C96.7929 20.768 97.2609 20.924 97.8609 
          20.924ZM110.82 20.924C111.444 20.924 112.008 20.864 112.512 20.744C113.04 20.6 113.58 20.432 114.132 20.24V25.244C113.388 25.556 112.596 25.82 111.756 
          26.036C110.916 26.252 109.848 26.36 108.552 26.36C107.256 26.36 106.116 26.156 105.132 25.748C104.172 25.34 103.416 24.644 102.864 23.66C102.312 22.652 
          102.036 21.248 102.036 19.448V11.24H99.6235V8.432L102.684 6.272L104.448 2.096H108.948V6.092H113.844V11.24H108.948V18.98C108.948 19.628 109.104 20.12 
          109.416 20.456C109.752 20.768 110.22 20.924 110.82 20.924ZM122.986 5.732C124.93 5.732 126.598 6.068 127.99 6.74C129.406 7.412 130.486 8.42 131.23 
          9.764C131.998 11.108 132.382 12.8 132.382 14.84V17.9H120.106C120.154 18.932 120.538 19.784 121.258 20.456C122.002 21.128 123.07 21.464 124.462 
          21.464C125.71 21.464 126.85 21.344 127.882 21.104C128.914 20.864 129.982 20.48 131.086 19.952V24.884C130.126 25.388 129.07 25.76 127.918 26C126.79 
          26.24 125.362 26.36 123.634 26.36C121.618 26.36 119.818 26.012 118.234 25.316C116.674 24.596 115.438 23.48 114.526 21.968C113.614 20.456 113.158 18.524 
          113.158 16.172C113.158 13.772 113.566 11.804 114.382 10.268C115.222 8.732 116.374 7.592 117.838 6.848C119.326 6.104 121.042 5.732 122.986 5.732ZM123.238 
          10.412C122.422 10.412 121.738 10.664 121.186 11.168C120.658 11.672 120.346 12.476 120.25 13.58H126.154C126.154 12.98 126.034 12.452 125.794 11.996C125.578 
          11.516 125.254 11.132 124.822 10.844C124.39 10.556 123.862 10.412 123.238 10.412ZM144.7 5.732C145.084 5.732 145.48 5.756 145.888 5.804C146.296 5.852 
          146.596 5.9 146.788 5.948L146.176 12.428C145.936 12.38 145.636 12.332 145.276 12.284C144.94 12.236 144.46 12.212 143.836 12.212C143.404 12.212 142.936 
          12.26 142.432 12.356C141.952 12.428 141.484 12.596 141.028 12.86C140.596 13.124 140.236 13.52 139.948 14.048C139.684 14.576 139.552 15.296 139.552 
          16.208V26H132.676V6.092H137.788L138.868 9.26H139.192C139.552 8.612 140.02 8.024 140.596 7.496C141.172 6.944 141.808 6.512 142.504 6.2C143.224 5.888 
          143.956 5.732 144.7 5.732Z"
          stroke="url(#linear)"
        />
      </LogoLoadingSVG>
    </LogoLoadingWrap>
  );
}
