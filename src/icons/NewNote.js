import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NewNoteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M16 20.975V17.975H13V15.975H16V12.975H18V15.975H21V17.975H18V20.975H16ZM4 18V16H11.075C11.025 16.35 11.0042 16.6833 11.0125 17C11.0208 17.3167 11.05 17.65 11.1 18H4ZM4 14V12H13.65C13.2667 12.2667 12.9208 12.5667 12.6125 12.9C12.3042 13.2333 12.0333 13.6 11.8 14H4ZM4 10V8H19V10H4ZM4 6V4H19V6H4Z"
      fill="white"
    />
  </Svg>
);
export default NewNoteIcon;
