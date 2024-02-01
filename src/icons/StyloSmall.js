import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const StyloSmallIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    {...props}
  >
    <Circle cx={20.6814} cy={20.8503} r={20.4295} fill="#FFD13D" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.1986 28.5658C27.735 25.2697 27.1193 20.5415 23.8232 18.005C23.5534 17.7973 23.1711 17.8645 22.9634 18.1344L14.5426 29.0769C14.335 29.3467 14.3679 29.7334 14.6378 29.9411C17.9339 32.4776 22.6621 31.8618 25.1986 28.5658Z"
      fill="#2B3434"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3367 13.3932C13.7977 16.6873 14.4099 21.416 17.7041 23.955C18.1134 24.2704 18.6901 24.156 19.0056 23.7467L27.0285 13.3374C27.344 12.9281 27.3078 12.3413 26.8985 12.0258C23.6043 9.48682 18.8757 10.099 16.3367 13.3932Z"
      fill="#2B3434"
    />
  </Svg>
);
export default StyloSmallIcon;
