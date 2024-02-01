import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CheckIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={10}
    viewBox="0 0 13 10"
    fill="none"
    {...props}
  >
    <Path
      d="M1 5.8L4.14286 9L12 1"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckIcon;
